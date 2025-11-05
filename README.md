# Onchain Lens - Base Mini App

Discover, Track, and Share Base Onchain Intelligence with Your Farcaster Network.

## Features

- 📊 **Personalized Onchain Feed** - Track significant transactions and contract interactions
- 🔍 **Contract Explorer** - Analyze smart contracts on Base
- 📋 **Social Watchlists** - Create and follow curated address lists
- 💬 **Reputation-Based Annotations** - Community-driven insights
- 🎯 **Farcaster Integration** - Native social features and sharing

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI**: React 19 + Tailwind CSS
- **Blockchain**: Base (L2) via OnchainKit
- **Social**: Farcaster MiniKit
- **Theme**: COINBASE (dark navy with #0052ff accents)

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/).

3. **Run development server**:
```bash
npm run dev
```

4. **Open the app**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
onchain-lens/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home feed
│   ├── watchlists/        # Watchlists page
│   ├── explore/           # Contract explorer
│   └── profile/           # User profile
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components
│   └── features/          # Feature-specific components
├── lib/
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Utility functions
└── public/
    └── .well-known/
        └── farcaster.json # Mini App manifest
```

## Key Features Implementation

### 1. Farcaster Integration
- Uses `@farcaster/miniapp-sdk` for native Farcaster features
- Calls `sdk.actions.ready()` on app load (critical!)
- Supports Frame sharing and notifications

### 2. OnchainKit Integration
- Wallet connection via `ConnectWallet`
- Identity display with `Avatar`, `Name`, `Badge`
- Transaction handling with gas sponsorship

### 3. Base Network
- Chain ID: 8453 (mainnet), 84532 (testnet)
- RPC: https://mainnet.base.org
- Explorer: https://basescan.org

## Deployment

1. **Build the app**:
```bash
npm run build
```

2. **Deploy to Vercel** (recommended):
```bash
vercel deploy
```

3. **Update manifest**:
Edit `public/.well-known/farcaster.json` with your production URL.

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY` - OnchainKit API key (required)
- `NEXT_PUBLIC_BASE_RPC_URL` - Base RPC endpoint (optional)
- `NEXT_PUBLIC_APP_URL` - Production app URL (optional)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License - see LICENSE file for details.
