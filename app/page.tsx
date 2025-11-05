'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Activity, TrendingUp, Users, Search, Bell, Plus } from 'lucide-react';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [activeTab, setActiveTab] = useState<'feed' | 'watchlists' | 'explore'>('feed');

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-fg text-lg">Loading Onchain Lens...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center glow-effect">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">Onchain Lens</h1>
                <p className="text-xs text-muted">Base Intelligence</p>
              </div>
            </div>
            <button className="p-2 rounded-lg hover:bg-surface transition-colors duration-200">
              <Bell className="w-5 h-5 text-fg" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-[73px] z-40 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            {[
              { id: 'feed', label: 'Feed', icon: Activity },
              { id: 'watchlists', label: 'Watchlists', icon: Users },
              { id: 'explore', label: 'Explore', icon: Search },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-3 rounded-t-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-surface text-accent border-b-2 border-accent'
                    : 'text-muted hover:text-fg hover:bg-surface/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'feed' && <FeedView />}
        {activeTab === 'watchlists' && <WatchlistsView />}
        {activeTab === 'explore' && <ExploreView />}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-accent text-white shadow-lg glow-effect hover:scale-110 transition-transform duration-200 flex items-center justify-center">
        <Plus className="w-6 h-6" />
      </button>
    </main>
  );
}

function FeedView() {
  const mockTransactions = [
    {
      id: 1,
      type: 'Swap',
      from: '0x742d...5f3a',
      to: 'Uniswap V3',
      value: '1.5 ETH',
      time: '2 min ago',
      status: 'confirmed',
    },
    {
      id: 2,
      type: 'Transfer',
      from: '0x8a3c...9d2b',
      to: '0x1f4e...7c8a',
      value: '0.05 ETH',
      time: '5 min ago',
      status: 'confirmed',
    },
    {
      id: 3,
      type: 'Contract',
      from: '0x5e2f...4b1c',
      to: 'Base Bridge',
      value: '10 ETH',
      time: '12 min ago',
      status: 'pending',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-fg">Your Feed</h2>
        <button className="text-accent hover:text-accent/80 text-sm font-medium">
          Filter
        </button>
      </div>

      {mockTransactions.map((tx) => (
        <div
          key={tx.id}
          className="glass-effect rounded-lg p-4 hover:bg-surface/80 transition-all duration-200 cursor-pointer"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-fg">{tx.type}</p>
                <p className="text-sm text-muted">{tx.time}</p>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                tx.status === 'confirmed'
                  ? 'bg-success/20 text-success'
                  : 'bg-warning/20 text-warning'
              }`}
            >
              {tx.status}
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted">From:</span>
              <span className="text-fg font-mono">{tx.from}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">To:</span>
              <span className="text-fg font-mono">{tx.to}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Value:</span>
              <span className="text-accent font-semibold">{tx.value}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function WatchlistsView() {
  const mockWatchlists = [
    {
      id: 1,
      name: 'DeFi Protocols',
      creator: '@vitalik',
      followers: 1234,
      addresses: 8,
    },
    {
      id: 2,
      name: 'Whale Wallets',
      creator: '@whale_alert',
      followers: 5678,
      addresses: 15,
    },
    {
      id: 3,
      name: 'NFT Traders',
      creator: '@nft_guru',
      followers: 890,
      addresses: 12,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-fg">Watchlists</h2>
        <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200 font-medium">
          Create New
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockWatchlists.map((list) => (
          <div
            key={list.id}
            className="glass-effect rounded-lg p-5 hover:bg-surface/80 transition-all duration-200 cursor-pointer"
          >
            <h3 className="text-lg font-bold text-fg mb-2">{list.name}</h3>
            <p className="text-sm text-muted mb-4">by {list.creator}</p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-fg">{list.followers}</span>
              </div>
              <span className="text-muted">{list.addresses} addresses</span>
            </div>
            <button className="w-full mt-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors duration-200 font-medium">
              Follow
            </button>
          </div>
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

      <div className="glass-effect rounded-lg p-6">
        <label className="block text-sm font-medium text-fg mb-2">
          Contract Address
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="0x..."
            className="flex-1 px-4 py-3 bg-surface border border-white/10 rounded-lg text-fg placeholder-muted focus:outline-none focus:border-accent transition-colors duration-200"
          />
          <button className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200 font-medium">
            Analyze
          </button>
        </div>
      </div>

      <div className="glass-effect rounded-lg p-6">
        <h3 className="text-lg font-bold text-fg mb-4">Trending Contracts</h3>
        <div className="space-y-3">
          {['Uniswap V3 Router', 'Base Bridge', 'USDC Token'].map((contract, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 bg-surface/50 rounded-lg hover:bg-surface transition-colors duration-200 cursor-pointer"
            >
              <span className="text-fg font-medium">{contract}</span>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
