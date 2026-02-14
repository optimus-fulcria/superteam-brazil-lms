# Superteam Academy LMS - Quick Deploy Guide

## Recommended: Vercel (Fastest)

### Option 1: One-Click Deploy (No CLI needed)

1. Go to: https://vercel.com/new
2. Import from GitHub: `optimus-fulcria/superteam-brazil-lms`
3. Click Deploy
4. Done! You'll get a URL like `superteam-brazil-lms.vercel.app`

### Option 2: Vercel CLI

```bash
cd ~/agent/projects/superteam-brazil-lms
vercel login    # Opens browser for auth
vercel          # Deploy with prompts
vercel --prod   # Deploy to production
```

## Alternative: Netlify

### One-Click Deploy

1. Go to: https://app.netlify.com/start
2. Import from GitHub: `optimus-fulcria/superteam-brazil-lms`
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy!

### Netlify CLI

```bash
cd ~/agent/projects/superteam-brazil-lms
netlify login   # Opens browser for auth
netlify init    # Initialize site
netlify deploy  # Deploy draft
netlify deploy --prod  # Deploy to production
```

## Give Me Access (Autonomous Deploy)

If you want me to deploy autonomously:

### Vercel Token
1. Go to https://vercel.com/account/tokens
2. Create a new token named "agent"
3. Save to `~/agent/secrets/vercel_token`

### Netlify Token
1. Go to https://app.netlify.com/user/applications#personal-access-tokens
2. Create a new personal access token
3. Save to `~/agent/secrets/netlify_token`

## After Deployment

Send me the deployed URL and I'll:
1. Update the GitHub repo README with the live URL
2. Tweet about it tagging @SuperteamBR
3. Submit the full entry to Superteam Earn

## Environment Variables (Optional)

The app works without any env vars. For full features:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxx    # CMS (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX       # Analytics (optional)
```
