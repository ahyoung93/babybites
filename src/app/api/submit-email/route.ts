import { NextResponse } from 'next/server'
import { saveEmail, getAllEmails, getEmailCount, initDatabase } from '@/lib/db'

// Initialize database on first request
let dbInitialized = false

async function ensureDbInitialized() {
  if (!dbInitialized) {
    await initDatabase()
    dbInitialized = true
  }
}

export async function POST(request: Request) {
  try {
    const { email, sourcePage } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    await ensureDbInitialized()

    const savedEmail = await saveEmail(email, sourcePage)

    return NextResponse.json(
      {
        success: true,
        message: 'Email saved successfully',
        data: savedEmail
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving email:', error)
    // Return more detailed error for debugging
    return NextResponse.json(
      {
        error: 'Failed to save email',
        details: error instanceof Error ? error.message : 'Unknown error',
        envCheck: {
          hasPostgresUrl: !!process.env.POSTGRES_URL,
          hasPostgresUrlNonPooling: !!process.env.POSTGRES_URL_NON_POOLING
        }
      },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    // Check for admin password
    const authHeader = request.headers.get('authorization')
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword || !authHeader || authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    await ensureDbInitialized()

    const emails = await getAllEmails()
    const count = await getEmailCount()

    return NextResponse.json(
      { emails, count },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error reading emails:', error)
    return NextResponse.json(
      { error: 'Failed to read emails' },
      { status: 500 }
    )
  }
}
