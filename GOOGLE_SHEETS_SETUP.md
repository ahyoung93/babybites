# Google Sheets Setup Guide

This is a **simpler alternative** to database storage. Emails will be saved directly to a Google Sheet you can access anytime!

## Setup Steps

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Baby Bites Email Submissions"
4. Add these column headers in row 1:
   - A1: `Email`
   - B1: `Submitted At`
   - C1: `Source Page`

### 2. Get Google Sheets API Credentials

#### Option A: Using Google Apps Script (Easiest - No API Key Needed!)

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any code in the editor
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    const email = data.email;
    const timestamp = new Date().toISOString();
    const sourcePage = data.sourcePage || 'Unknown';

    // Check if email already exists
    const emailColumn = sheet.getRange('A:A').getValues();
    const emailExists = emailColumn.some(row => row[0] === email);

    if (!emailExists) {
      sheet.appendRow([email, timestamp, sourcePage]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues();
    const emails = data.slice(1).map(row => ({
      email: row[0],
      submittedAt: row[1],
      sourcePage: row[2]
    }));

    return ContentService
      .createTextOutput(JSON.stringify({ emails, count: emails.length }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy** → **New deployment**
5. Click the gear icon → **Web app**
6. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy**
8. Copy the **Web app URL** (looks like: `https://script.google.com/macros/s/...`)
9. Authorize the app when prompted

### 3. Update Your Environment Variables

Create `.env.local` in your project root:

```bash
GOOGLE_SHEETS_URL=https://script.google.com/macros/s/.../exec
```

### 4. Update the API Route

The code is already set up to work with Google Sheets! Just set the environment variable and it will automatically use it.

## Testing

1. Restart your dev server (`npm run dev`)
2. Submit a test email through your form
3. Check your Google Sheet - you should see the email appear!

## Viewing Data

Just open your Google Sheet anytime to see all submissions. You can:
- Sort by date
- Filter emails
- Export to CSV/Excel
- Create charts and analytics
- Share with team members (with appropriate permissions)

## Advantages of Google Sheets

✅ **Simple** - No database setup needed
✅ **Free** - Google Sheets is free
✅ **Easy Access** - View data anytime in your browser
✅ **Export** - Download as CSV/Excel
✅ **Collaborate** - Share with team members
✅ **Backup** - Google handles backups
✅ **No Code Changes** - Works immediately

## Security Notes

- The Apps Script URL is public but doesn't expose your data
- Only you can view the Google Sheet (unless you share it)
- Anyone who has the script URL can submit emails (which is what you want for your form)
- To prevent spam, you can add CAPTCHA later

## Troubleshooting

### "Authorization required"
- Make sure you authorized the script in step 2.8
- Check that "Who has access" is set to "Anyone"

### Emails not appearing
- Check the Apps Script execution logs (in Apps Script editor → Executions)
- Verify the GOOGLE_SHEETS_URL in .env.local is correct
- Make sure the sheet has the correct column headers

### Duplicate prevention
- The script checks if email already exists before adding
- Duplicates are silently ignored (returns success either way)

## Migrating from emails.json

If you have existing emails in `emails.json`, you can manually copy-paste them into your Google Sheet.

## Production Deployment

When deploying to Vercel:
1. Add the environment variable in Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add `GOOGLE_SHEETS_URL` with your script URL
2. Redeploy your app
3. Done!

## Alternative: Using Google Sheets API

If you need more advanced features (read data from your app, update existing rows, etc.), you can use the official Google Sheets API. This requires more setup (service account, API key) but provides more functionality.

Let me know if you want to set that up instead!
