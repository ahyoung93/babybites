'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface EmailSubmission {
  id: number
  email: string
  submitted_at: string
  source_page?: string
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [emails, setEmails] = useState<EmailSubmission[]>([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/submit-email', {
        headers: {
          'Authorization': `Bearer ${password}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setIsAuthenticated(true)
        setEmails(data.emails)
        setCount(data.count)
        // Store password in session for subsequent requests
        sessionStorage.setItem('admin_password', password)
      } else {
        setError('Invalid password')
      }
    } catch (err) {
      setError('Failed to connect')
    } finally {
      setLoading(false)
    }
  }

  const downloadCSV = () => {
    const headers = ['ID', 'Email', 'Submitted At', 'Source Page']
    const rows = emails.map(email => [
      email.id,
      email.email,
      new Date(email.submitted_at).toLocaleString(),
      email.source_page || 'N/A'
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `baby-bites-emails-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword('')
    setEmails([])
    setCount(0)
    sessionStorage.removeItem('admin_password')
  }

  // Try to auto-login if password is stored
  useEffect(() => {
    const storedPassword = sessionStorage.getItem('admin_password')
    if (storedPassword) {
      setPassword(storedPassword)
      fetch('/api/submit-email', {
        headers: {
          'Authorization': `Bearer ${storedPassword}`
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.emails) {
            setIsAuthenticated(true)
            setEmails(data.emails)
            setCount(data.count)
          }
        })
        .catch(() => {
          sessionStorage.removeItem('admin_password')
        })
    }
  }, [])

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-pink-50 flex items-center justify-center p-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-md w-full border border-warm-blue-100/30">
          <h1 className="text-3xl font-bold text-warm-beige-900 mb-2 text-center">Admin Login</h1>
          <p className="text-warm-beige-600 text-center mb-8">Enter your password to view email submissions</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                required
                className="w-full px-6 py-3.5 rounded-full border-2 border-warm-blue-200 focus:border-warm-blue-400 focus:outline-none text-base text-warm-beige-900"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3.5 bg-gradient-to-r from-soft-pink-400 to-soft-pink-500 hover:from-soft-pink-500 hover:to-soft-pink-600 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold rounded-full transition-all duration-300 text-base shadow-lg hover:shadow-xl"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-warm-blue-500 hover:text-warm-blue-600 text-sm">
              ← Back to home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-6 border border-warm-blue-100/30">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-warm-beige-900 mb-2">Email Submissions</h1>
              <p className="text-warm-beige-600">Total: {count} {count === 1 ? 'subscriber' : 'subscribers'}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={downloadCSV}
                className="px-6 py-3 bg-gradient-to-r from-warm-blue-400 to-warm-blue-500 hover:from-warm-blue-500 hover:to-warm-blue-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Download CSV
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-3 bg-white hover:bg-warm-beige-50 text-warm-beige-700 font-semibold rounded-full transition-all duration-300 border-2 border-warm-beige-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-warm-blue-100/30">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-warm-blue-50 to-soft-pink-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-warm-beige-900">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-warm-beige-900">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-warm-beige-900">Submitted At</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-warm-beige-900">Source Page</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-blue-100/30">
                {emails.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-warm-beige-600">
                      No email submissions yet
                    </td>
                  </tr>
                ) : (
                  emails.map((email) => (
                    <tr key={email.id} className="hover:bg-warm-blue-50/30 transition-colors">
                      <td className="px-6 py-4 text-sm text-warm-beige-900">{email.id}</td>
                      <td className="px-6 py-4 text-sm text-warm-beige-900 font-medium">{email.email}</td>
                      <td className="px-6 py-4 text-sm text-warm-beige-700">
                        {new Date(email.submitted_at).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-warm-beige-700">
                        {email.source_page || 'N/A'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-warm-blue-500 hover:text-warm-blue-600">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
