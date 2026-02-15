# Superteam Academy LMS

🌐 **Live Demo**: [superteam-brazil-mom5cryr2-eric-gaudets-projects.vercel.app](https://superteam-brazil-mom5cryr2-eric-gaudets-projects.vercel.app)

A decentralized Learning Management System (LMS) built for Superteam Brazil. Learn Solana development, earn on-chain credentials, and track your progress with gamified learning experiences.

## Features

- **Interactive Courses**: Learn Solana development through hands-on coding exercises
- **Multi-language Support**: Available in Portuguese, Spanish, and English
- **Gamification**: Earn XP, maintain streaks, and climb the leaderboard
- **On-chain Credentials**: Receive verifiable NFT credentials upon course completion
- **Monaco Code Editor**: VS Code-like coding experience in the browser
- **Responsive Design**: Works seamlessly on desktop and mobile

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **Blockchain**: Solana Wallet Adapter
- **CMS**: Sanity (optional, falls back to mock data)
- **i18n**: next-intl (PT/ES/EN)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/solanabr/superteam-academy.git
cd superteam-academy

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

Create a `.env.local` file:

```env
# Optional: Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   └── [locale]/           # Locale-specific routes
├── components/
│   ├── ui/                 # shadcn base components
│   ├── navigation/         # Header, navigation
│   ├── gamification/       # XP display, streaks
│   ├── wallet/             # Wallet connection
│   └── locale/             # Language switcher
├── lib/
│   ├── sanity/             # CMS client, queries, types
│   ├── data/               # Data fetching layer
│   ├── solana/             # Wallet config
│   └── utils/              # Helpers
├── messages/               # i18n translations
│   ├── en.json
│   ├── pt.json
│   └── es.json
└── i18n/                   # i18n configuration
```

## CMS Integration

The app supports Sanity CMS for course content management. Without CMS configuration, it uses built-in mock data.

See [docs/CMS_GUIDE.md](docs/CMS_GUIDE.md) for setup instructions.

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com/new)
3. Configure environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` (optional)
   - `NEXT_PUBLIC_SANITY_DATASET` (optional)
   - `NEXT_PUBLIC_GA_ID` (optional)
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Foptimus-fulcria%2Fsuperteam-brazil-lms)

### Netlify

1. Push your code to GitHub
2. Import in [Netlify](https://app.netlify.com/start)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables as needed

### Docker

```bash
# Build image
docker build -t superteam-lms .

# Run container
docker run -p 3000:3000 superteam-lms
```

## Architecture

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed technical documentation.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

---

Built with love by the Solana community for Superteam Brazil.
