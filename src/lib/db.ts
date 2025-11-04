import { Pool } from 'pg'

export interface EmailSubmission {
  id: number
  email: string
  submitted_at: Date
  source_page?: string
}

// Create a connection pool using standard pg package
// This works with any Postgres connection string
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
})

// Create the emails table if it doesn't exist
export async function initDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS email_submissions (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        source_page VARCHAR(100),
        UNIQUE(email)
      );
    `)
    console.log('Database initialized successfully')
  } catch (error) {
    console.error('Error initializing database:', error)
    throw error
  }
}

// Save email to database
export async function saveEmail(email: string, sourcePage?: string): Promise<EmailSubmission> {
  try {
    const result = await pool.query(
      `INSERT INTO email_submissions (email, source_page)
       VALUES ($1, $2)
       ON CONFLICT (email) DO UPDATE
       SET submitted_at = CURRENT_TIMESTAMP, source_page = $2
       RETURNING *`,
      [email, sourcePage]
    )
    return result.rows[0] as EmailSubmission
  } catch (error) {
    console.error('Error saving email:', error)
    throw error
  }
}

// Get all email submissions
export async function getAllEmails(): Promise<EmailSubmission[]> {
  try {
    const result = await pool.query(
      `SELECT * FROM email_submissions
       ORDER BY submitted_at DESC`
    )
    return result.rows as EmailSubmission[]
  } catch (error) {
    console.error('Error fetching emails:', error)
    throw error
  }
}

// Get count of email submissions
export async function getEmailCount(): Promise<number> {
  try {
    const result = await pool.query(
      `SELECT COUNT(*) as count FROM email_submissions`
    )
    return parseInt(result.rows[0].count)
  } catch (error) {
    console.error('Error counting emails:', error)
    throw error
  }
}
