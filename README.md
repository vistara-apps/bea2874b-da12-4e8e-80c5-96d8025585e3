# Onchain Lens - Base Mini App

Discover, Track, and Share Base Onchain Intelligence with Your Farcaster Network.

## Features

- **Personalized Onchain Feed**: Curated insights into important onchain movements
- **Contract Interaction Explorer**: Visualize contract interactions and token flows
- **Social Watchlists**: Create and share watchlists with your Farcaster network
- **Reputation-Based Annotations**: Community-driven onchain intelligence

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- MiniKit for Farcaster integration
- Tailwind CSS with Coinbase theme
- TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## Farcaster Manifest

The app includes a Farcaster manifest at `public/.well-known/farcaster.json` for Mini App integration.

## License

MIT
