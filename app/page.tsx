'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Activity, TrendingUp, Users, Eye, Search, Bell, Plus } from 'lucide-react';
import { WatchlistCard } from './components/WatchlistCard';
import { ActivityFeedItem } from './components/ActivityFeedItem';
import { ContractExplorer } from './components/ContractExplorer';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'feed' | 'watchlists' | 'explore'>('feed');
  const [isReady, setIsReady] = useState(false);

  // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
  useEffect(() => {
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted">Loading Onchain Lens...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center glow-effect">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Onchain Lens</h1>
                <p className="text-xs text-muted">Base Intelligence</p>
              </div>
            </div>
            <button className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:bg-white/10 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="sticky top-[73px] z-40 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('feed')}
              className={`flex-1 py-3 px-4 font-semibold transition-all ${
                activeTab === 'feed'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              <Activity className="w-4 h-4 inline mr-2" />
              Feed
            </button>
            <button
              onClick={() => setActiveTab('watchlists')}
              className={`flex-1 py-3 px-4 font-semibold transition-all ${
                activeTab === 'watchlists'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              Watchlists
            </button>
            <button
              onClick={() => setActiveTab('explore')}
              className={`flex-1 py-3 px-4 font-semibold transition-all ${
                activeTab === 'explore'
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-muted hover:text-fg'
              }`}
            >
              <Search className="w-4 h-4 inline mr-2" />
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'feed' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Onchain Feed</h2>
              <button className="btn-secondary text-sm">
                <TrendingUp className="w-4 h-4 inline mr-1" />
                Trending
              </button>
            </div>
            
            <ActivityFeedItem
              type="transfer"
              from="0x742d...5f3a"
              to="0x8b3c...9d2e"
              value="1.5 ETH"
              timestamp="2 minutes ago"
              status="confirmed"
            />
            
            <ActivityFeedItem
              type="swap"
              from="0x742d...5f3a"
              to="Uniswap V3"
              value="500 USDC → 0.15 ETH"
              timestamp="15 minutes ago"
              status="confirmed"
            />
            
            <ActivityFeedItem
              type="contract"
              from="0x9f2a...4b1c"
              to="Base NFT Mint"
              value="Minted #1234"
              timestamp="1 hour ago"
              status="confirmed"
            />

            <div className="card text-center py-8">
              <p className="text-muted mb-4">No more activity to show</p>
              <button className="btn-primary">
                <Plus className="w-4 h-4 inline mr-2" />
                Follow More Addresses
              </button>
            </div>
          </div>
        )}

        {activeTab === 'watchlists' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Watchlists</h2>
              <button className="btn-primary">
                <Plus className="w-4 h-4 inline mr-2" />
                Create
              </button>
            </div>

            <WatchlistCard
              name="DeFi Whales"
              description="Top DeFi protocol interactions and large transfers"
              creator="vitalik.eth"
              followers={1234}
              addresses={15}
              isFollowing={true}
            />

            <WatchlistCard
              name="Base Builders"
              description="Active developers and protocol deployers on Base"
              creator="jesse.base.eth"
              followers={856}
              addresses={23}
              isFollowing={false}
            />

            <WatchlistCard
              name="NFT Collectors"
              description="Notable NFT mints and marketplace activity"
              creator="punk6529.eth"
              followers={2341}
              addresses={42}
              isFollowing={true}
            />
          </div>
        )}

        {activeTab === 'explore' && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Contract Explorer</h2>
              <p className="text-muted">
                Explore smart contracts and their interactions on Base
              </p>
            </div>

            <ContractExplorer />
          </div>
        )}
      </div>
    </main>
  );
}
