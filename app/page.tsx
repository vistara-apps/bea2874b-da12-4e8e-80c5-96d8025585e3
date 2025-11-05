'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Activity, TrendingUp, Users, Search, Plus } from 'lucide-react';
import { ConnectWallet } from './components/ConnectWallet';
import { FeedCard } from './components/FeedCard';
import { WatchlistCard } from './components/WatchlistCard';
import { ContractExplorer } from './components/ContractExplorer';

type Tab = 'feed' | 'watchlists' | 'explore';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('feed');
  const [isReady, setIsReady] = useState(false);

  // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
  useEffect(() => {
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted">Loading Onchain Lens...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface border-b border-border backdrop-blur-lg bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">Onchain Lens</h1>
                <p className="text-xs text-muted">Base Intelligence</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-[73px] z-40 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('feed')}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors rounded-t-md ${
                activeTab === 'feed'
                  ? 'bg-bg text-accent border-b-2 border-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              <Activity className="w-4 h-4 inline-block mr-2" />
              Feed
            </button>
            <button
              onClick={() => setActiveTab('watchlists')}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors rounded-t-md ${
                activeTab === 'watchlists'
                  ? 'bg-bg text-accent border-b-2 border-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              <Users className="w-4 h-4 inline-block mr-2" />
              Watchlists
            </button>
            <button
              onClick={() => setActiveTab('explore')}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors rounded-t-md ${
                activeTab === 'explore'
                  ? 'bg-bg text-accent border-b-2 border-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              <Search className="w-4 h-4 inline-block mr-2" />
              Explore
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'feed' && <FeedView />}
        {activeTab === 'watchlists' && <WatchlistsView />}
        {activeTab === 'explore' && <ExploreView />}
      </div>
    </main>
  );
}

function FeedView() {
  const mockTransactions = [
    {
      hash: '0x1234...5678',
      from: '0xabcd...ef01',
      to: '0x2345...6789',
      value: '1.5 ETH',
      timestamp: Date.now() - 300000,
      type: 'transfer',
    },
    {
      hash: '0x2345...6789',
      from: '0xbcde...f012',
      to: 'Uniswap V3',
      value: '500 USDC',
      timestamp: Date.now() - 600000,
      type: 'swap',
    },
    {
      hash: '0x3456...7890',
      from: '0xcdef...0123',
      to: 'Base Bridge',
      value: '0.5 ETH',
      timestamp: Date.now() - 900000,
      type: 'bridge',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-fg">Your Feed</h2>
        <button className="text-sm text-accent hover:text-accent/80 transition-colors">
          Customize
        </button>
      </div>
      
      {mockTransactions.map((tx, index) => (
        <FeedCard key={index} transaction={tx} />
      ))}
    </div>
  );
}

function WatchlistsView() {
  const mockWatchlists = [
    {
      id: '1',
      name: 'DeFi Whales',
      description: 'Top DeFi protocol interactions',
      creatorName: 'vitalik.eth',
      followers: 1234,
      addresses: 15,
    },
    {
      id: '2',
      name: 'NFT Traders',
      description: 'Active NFT marketplace participants',
      creatorName: 'punk6529',
      followers: 892,
      addresses: 23,
    },
    {
      id: '3',
      name: 'Base Builders',
      description: 'Core Base ecosystem contracts',
      creatorName: 'jessepollak',
      followers: 2156,
      addresses: 42,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-fg">Watchlists</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
          <Plus className="w-4 h-4" />
          Create
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockWatchlists.map((watchlist) => (
          <WatchlistCard key={watchlist.id} watchlist={watchlist} />
        ))}
      </div>
    </div>
  );
}

function ExploreView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-fg">Explore Contracts</h2>
      </div>

      <ContractExplorer />

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-fg mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-accent" />
          Trending Contracts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Uniswap V3', 'Base Bridge', 'Aerodrome', 'Compound', 'Aave V3', 'Stargate'].map((name, i) => (
            <div key={i} className="p-4 bg-surface rounded-lg border border-border hover:border-accent transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-fg">{name}</h4>
                <span className="text-xs text-success">+{Math.floor(Math.random() * 50 + 10)}%</span>
              </div>
              <p className="text-sm text-muted mb-2">0x{Math.random().toString(16).slice(2, 10)}...{Math.random().toString(16).slice(2, 6)}</p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span>{Math.floor(Math.random() * 1000 + 100)} txs</span>
                <span>{Math.floor(Math.random() * 500 + 50)} users</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
