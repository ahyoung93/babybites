# Baby Bites

> Conceive with Clarity: 5 minutes a week, 10 weeks to clarity

A Next.js website providing OB/GYN-reviewed fertility guidance through a 10-week email newsletter series.

## Features

- ✅ Clean, modern UI with responsive design
- ✅ Email signup with validation
- ✅ SEO optimized with meta tags and sitemap
- ✅ Mobile-first design
- ✅ Vercel deployment ready

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: (To be added)

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

## Project Structure

```
baby-bites/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── what-youll-get/       # Features page
│   │   ├── why-we-built-this/    # About page
│   │   ├── thank-you/            # Post-signup page
│   │   ├── api/
│   │   │   └── submit-email/     # Email submission endpoint
│   │   ├── layout.tsx            # Root layout with SEO
│   │   ├── globals.css           # Global styles
│   │   └── sitemap.ts            # Dynamic sitemap
│   └── ...
├── public/
│   └── robots.txt                # Search engine instructions
├── emails.json                   # Email submissions (local storage)
└── vercel.json                   # Vercel configuration
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## To-Do Before Launch

- [ ] Add favicon
- [ ] Create OG image (1200x630px)
- [ ] Set up production email storage/service
- [ ] Add Privacy Policy
- [ ] Add Terms of Service
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console

## License

© 2025 Baby Bites. All rights reserved.
