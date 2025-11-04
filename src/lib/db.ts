import { sql } from '@vercel/postgres'

export interface EmailSubmission {
  id: number
  email: string
  submitted_at: Date
  source_page?: string
}

// Create the emails table if it doesn't exist
export async function initDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS email_submissions (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        source_page VARCHAR(100),
        UNIQUE(email)
      );
    `
    console.log('Database initialized successfully')
  } catch (error) {
    console.error('Error initializing database:', error)
    throw error
  }
}

// Save email to database
export async function saveEmail(email: string, sourcePage?: string): Promise<EmailSubmission> {
  try {
    const result = await sql`
      INSERT INTO email_submissions (email, source_page)
      VALUES (${email}, ${sourcePage})
      ON CONFLICT (email) DO UPDATE
      SET submitted_at = CURRENT_TIMESTAMP, source_page = ${sourcePage}
      RETURNING *;
    `
    return result.rows[0] as EmailSubmission
  } catch (error) {
    console.error('Error saving email:', error)
    throw error
  }
}

// Get all email submissions
export async function getAllEmails(): Promise<EmailSubmission[]> {
  try {
    const result = await sql`
      SELECT * FROM email_submissions
      ORDER BY submitted_at DESC;
    `
    return result.rows as EmailSubmission[]
  } catch (error) {
    console.error('Error fetching emails:', error)
    throw error
  }
}

// Get count of email submissions
export async function getEmailCount(): Promise<number> {
  try {
    const result = await sql`
      SELECT COUNT(*) as count FROM email_submissions;
    `
    return parseInt(result.rows[0].count)
  } catch (error) {
    console.error('Error counting emails:', error)
    throw error
  }
}
