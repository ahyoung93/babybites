# Baby Bites Deployment Guide

## Prerequisites
- [ ] Domain name purchased (recommended: babybites.com)
- [ ] GitHub account
- [ ] Vercel account (free tier works)

## Step 1: Push to GitHub

1. Initialize git (if not already done):
```bash
cd /Users/ahyoungyoo/baby-bites
git init
git add .
git commit -m "Initial commit - Baby Bites website"
```

2. Create a new repository on GitHub
3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/baby-bites.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your `baby-bites` repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

Your site will be live at: `https://baby-bites-xxx.vercel.app`

## Step 3: Add Custom Domain

1. In Vercel project settings → Domains
2. Add your custom domain (e.g., babybites.com)
3. Follow DNS instructions to point your domain to Vercel
4. SSL certificate will be auto-provisioned

## Step 4: Update Domain References

After your domain is live, update these files:

### src/app/layout.tsx
```typescript
metadataBase: new URL('https://your-actual-domain.com'),
```

### src/app/sitemap.ts
```typescript
const baseUrl = 'https://your-actual-domain.com'
```

### public/robots.txt
```
Sitemap: https://your-actual-domain.com/sitemap.xml
```

## Step 5: Set Up Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (domain)
3. Verify ownership using one of the methods:
   - DNS verification (recommended)
   - HTML file upload
   - Meta tag (add to layout.tsx)
4. Submit your sitemap: `https://your-domain.com/sitemap.xml`

## Step 6: Set Up Google Analytics (Next Steps)

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to your site (we can help with this next!)

## Important Notes

### Email Storage
- Currently emails are saved to `emails.json` locally
- **Before going live**, you should:
  - Set up a proper database (Vercel Postgres, Supabase, etc.)
  - OR integrate with email service (Mailchimp, ConvertKit, Resend)
  - The current file-based approach won't work in production on Vercel

### Missing Items (to add before/after launch)
- [ ] Favicon (you'll need to create one)
- [ ] OG image for social sharing (`public/og-image.png`, 1200x630px)
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] Cookie consent banner (if using analytics)
- [ ] Email marketing setup

## Testing Before Launch

1. Test all form submissions
2. Verify all links work
3. Check mobile responsiveness
4. Test on different browsers
5. Verify meta tags using:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Post-Launch Checklist

- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Monitor for errors in Vercel dashboard
- [ ] Set up email notifications for form submissions
- [ ] Create social media accounts
- [ ] Announce launch!

## Questions?
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
