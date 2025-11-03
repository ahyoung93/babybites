// Google Sheets integration for email submissions

export interface EmailSubmission {
  email: string
  submittedAt: string
  sourcePage?: string
}

// Save email to Google Sheets via Apps Script
export async function saveEmailToSheets(
  email: string,
  sourcePage?: string
): Promise<{ success: boolean; message?: string; error?: string }> {
  const sheetsUrl = process.env.GOOGLE_SHEETS_URL

  if (!sheetsUrl) {
    console.warn('GOOGLE_SHEETS_URL not configured, skipping Google Sheets save')
    return { success: false, error: 'Google Sheets not configured' }
  }

  try {
    const response = await fetch(sheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        sourcePage: sourcePage || 'homepage',
        timestamp: new Date().toISOString(),
      }),
      redirect: 'follow', // Important for Apps Script
    })

    const data = await response.json()

    if (data.success) {
      return { success: true, message: 'Email saved to Google Sheets' }
    } else {
      return { success: false, error: data.error || 'Failed to save to Google Sheets' }
    }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Get all emails from Google Sheets
export async function getEmailsFromSheets(): Promise<{
  success: boolean
  emails?: EmailSubmission[]
  count?: number
  error?: string
}> {
  const sheetsUrl = process.env.GOOGLE_SHEETS_URL

  if (!sheetsUrl) {
    return { success: false, error: 'Google Sheets not configured' }
  }

  try {
    const response = await fetch(sheetsUrl, {
      method: 'GET',
      redirect: 'follow',
    })

    const data = await response.json()

    if (data.emails) {
      return {
        success: true,
        emails: data.emails,
        count: data.count || data.emails.length,
      }
    } else {
      return { success: false, error: data.error || 'Failed to fetch from Google Sheets' }
    }
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
