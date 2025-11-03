# Database Setup Guide

## Vercel Postgres Setup (Recommended - Free Tier)

### 1. Create Postgres Database in Vercel

1. Go to your Vercel project dashboard
2. Click on the "Storage" tab
3. Click "Create Database"
4. Select "Postgres"
5. Choose a name (e.g., "baby-bites-db")
6. Select a region close to your users
7. Click "Create"

### 2. Connect to Your Project

Vercel will automatically add these environment variables to your project:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

### 3. Local Development

For local development, create a `.env.local` file:

```bash
# Get these values from Vercel Dashboard → Storage → Your Database → .env.local
POSTGRES_URL="************"
POSTGRES_PRISMA_URL="************"
POSTGRES_URL_NON_POOLING="************"
POSTGRES_USER="************"
POSTGRES_HOST="************"
POSTGRES_PASSWORD="************"
POSTGRES_DATABASE="************"
```

**Important**: Never commit `.env.local` to git (it's already in .gitignore)

### 4. Initialize the Database

The database table will be created automatically on the first API request.

Or you can manually initialize it by visiting:
```
http://localhost:3000/api/submit-email
```

### 5. View Your Data

#### Option A: Vercel Dashboard
1. Go to Storage → Your Database → Data
2. You can run SQL queries directly

#### Option B: Via API
Visit: `http://your-domain.com/api/submit-email`

This will return all emails in JSON format.

## Alternative: Keep File-Based Storage (Development Only)

If you want to keep using the file-based approach for now (NOT recommended for production):

1. Don't set up Vercel Postgres
2. The app will fall back to using `emails.json`
3. Remember: This **will not work** on Vercel in production

## Email Service Integration (Future)

For a complete solution, consider integrating with:

### Mailchimp
- Free up to 500 subscribers
- Full email marketing features
- API: https://mailchimp.com/developer/

### ConvertKit
- Built for creators
- Automation features
- API: https://developers.convertkit.com/

### Resend
- Modern, developer-friendly
- Free tier: 3,000 emails/month
- API: https://resend.com/docs

### Beehiiv
- Newsletter-specific platform
- Great analytics
- API: https://docs.beehiiv.com/

## Migrating Existing Data

If you have emails in `emails.json`, you can migrate them:

```sql
-- Run this in Vercel Postgres Query tab
INSERT INTO email_submissions (email, submitted_at)
VALUES
  ('user1@example.com', '2025-11-03T22:20:32.715Z'),
  ('user2@example.com', '2025-11-03T23:15:00.000Z');
```

## Troubleshooting

### Error: "Connection refused"
- Make sure you've added the environment variables
- Restart your development server
- Check Vercel dashboard for database status

### Error: "Table doesn't exist"
- The table is created automatically on first use
- Try making a test submission through the form
- Or manually run the CREATE TABLE query in Vercel dashboard

### Can't see data in Vercel
- Check the "Data" tab in your database
- Run: `SELECT * FROM email_submissions;`

## Security Notes

- ✅ Environment variables are encrypted in Vercel
- ✅ Database connections use SSL by default
- ✅ Email addresses are stored with UNIQUE constraint (no duplicates)
- ⚠️ No personal data beyond email addresses is collected
- ⚠️ Comply with GDPR/privacy laws before going live
