# Onchain Lens - Base Mini App

Discover, Track, and Share Base Onchain Intelligence with Your Farcaster Network.

## Features

- **Personalized Onchain Feed**: Real-time activity from followed addresses and trending contracts
- **Social Watchlists**: Create and share curated lists of addresses with your network
- **Contract Explorer**: Visualize smart contract interactions and token flows
- **Reputation-Based Annotations**: Community-driven insights with social context

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Social**: Farcaster Mini App SDK
- **Wallet**: OnchainKit by Coinbase
- **Styling**: Tailwind CSS with Coinbase theme

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

## Key Integrations

- **@coinbase/onchainkit**: Identity, wallet, and transaction components
- **@farcaster/miniapp-sdk**: Farcaster Mini App integration
- **wagmi + viem**: Blockchain interactions
- **@tanstack/react-query**: Data fetching and caching

## Architecture

```
app/
├── components/
│   ├── Providers.tsx          # OnchainKit + React Query setup
│   ├── WatchlistCard.tsx      # Watchlist display component
│   ├── ActivityFeedItem.tsx   # Transaction feed item
│   └── ContractExplorer.tsx   # Contract search and analysis
├── page.tsx                   # Main app with tabs
├── layout.tsx                 # Root layout with metadata
└── globals.css                # Coinbase theme + custom styles
```

## Theme System

The app uses the **Coinbase theme** with:
- Dark navy background (#0A0B0D)
- Coinbase blue accents (#0052FF)
- Subtle rounded borders
- Glass morphism effects
- Smooth transitions

## License

MIT
