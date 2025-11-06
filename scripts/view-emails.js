// Simple script to view and export email submissions
// Usage: node scripts/view-emails.js

const { Pool } = require('pg')
const fs = require('fs')

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' })

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false }
})

async function viewEmails() {
  try {
    console.log('Connecting to database...\n')

    // Get all emails
    const result = await pool.query(
      'SELECT * FROM email_submissions ORDER BY submitted_at DESC'
    )

    console.log(`Found ${result.rows.length} email submissions:\n`)
    console.log('─'.repeat(80))

    result.rows.forEach((row, index) => {
      console.log(`${index + 1}. ${row.email}`)
      console.log(`   Submitted: ${new Date(row.submitted_at).toLocaleString()}`)
      console.log(`   Source: ${row.source_page || 'N/A'}`)
      console.log('─'.repeat(80))
    })

    // Export to CSV
    const csvHeaders = 'ID,Email,Submitted At,Source Page\n'
    const csvRows = result.rows.map(row =>
      `${row.id},"${row.email}","${new Date(row.submitted_at).toISOString()}","${row.source_page || 'N/A'}"`
    ).join('\n')

    const csvContent = csvHeaders + csvRows
    const filename = `email-submissions-${new Date().toISOString().split('T')[0]}.csv`

    fs.writeFileSync(filename, csvContent)
    console.log(`\n✅ Exported to ${filename}`)

  } catch (error) {
    console.error('Error:', error.message)
  } finally {
    await pool.end()
  }
}

viewEmails()
