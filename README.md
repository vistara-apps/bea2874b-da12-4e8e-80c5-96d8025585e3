# Onchain Lens - Base Mini App

Discover, Track, and Share Base Onchain Intelligence with Your Farcaster Network.

## Features

- 🔍 **Personalized Onchain Feed** - Curated insights into important onchain movements
- 🔗 **Contract Interaction Explorer** - Visualize key interactions and token flows
- 📋 **Social Watchlists** - Create and share watchlists with your Farcaster network
- 💬 **Reputation-Based Annotations** - Add context to addresses and transactions
- 🎯 **Farcaster Integration** - Native social features and Frame support

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS (COINBASE theme)
- **Blockchain**: Base (L2 on Ethereum)
- **Integrations**: 
  - OnchainKit for Base identity and wallet
  - MiniKit for Farcaster Mini App features
  - Wagmi + Viem for blockchain interactions

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Get your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
onchain-lens/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page (feed)
│   ├── explore/           # Contract explorer
│   ├── watchlists/        # Watchlist management
│   └── profile/           # User profile
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components
│   └── features/          # Feature-specific components
├── lib/
│   ├── types.ts           # TypeScript interfaces
│   └── utils.ts           # Utility functions
└── public/
    └── .well-known/       # Farcaster manifest
```

## Key Features Implementation

### Farcaster Mini App Integration

The app uses `@farcaster/miniapp-sdk` to integrate with Farcaster:

```tsx
import { sdk } from '@farcaster/miniapp-sdk';

useEffect(() => {
  sdk.actions.ready(); // Critical for Mini App display
}, []);
```

### OnchainKit Integration

Wallet connection and Base identity:

```tsx
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains';

<OnchainKitProvider apiKey={apiKey} chain={base}>
  {children}
</OnchainKitProvider>
```

### Theme System

COINBASE theme with dark navy background and blue accents:

```css
:root {
  --color-bg: #0a0e27;
  --color-primary: #0052ff;
  --color-accent: #1c6fff;
}
```

## Deployment

1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended):
   ```bash
   vercel deploy
   ```

3. **Update manifest**: Update `public/.well-known/farcaster.json` with your production URL

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY` - OnchainKit API key (required)
- `NEXT_PUBLIC_BASE_RPC_URL` - Base RPC endpoint (optional)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details
