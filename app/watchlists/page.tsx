'use client';

import { useState } from 'react';
import { WatchlistCard } from '@/components/features/WatchlistCard';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Watchlist } from '@/lib/types';
import { Plus, Search, TrendingUp } from 'lucide-react';

export default function WatchlistsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data
  const mockWatchlists: Watchlist[] = [
    {
      id: '1',
      name: 'DeFi Protocols',
      description: 'Top DeFi protocols on Base including Uniswap, Aave, and Compound',
      creatorFid: 12345,
      isPublic: true,
      followedByCount: 1234,
      addresses: ['0x123...', '0x456...', '0x789...'],
      contracts: ['0xabc...', '0xdef...'],
      tags: ['DeFi', 'Protocols', 'Trading'],
      createdAt: Date.now() / 1000,
    },
    {
      id: '2',
      name: 'NFT Marketplaces',
      description: 'Major NFT marketplaces and collections on Base',
      creatorFid: 67890,
      isPublic: true,
      followedByCount: 567,
      addresses: ['0x111...', '0x222...'],
      contracts: ['0x333...', '0x444...', '0x555...'],
      tags: ['NFT', 'Marketplace', 'Art'],
      createdAt: Date.now() / 1000 - 86400,
    },
    {
      id: '3',
      name: 'Whale Wallets',
      description: 'High-value wallets with significant Base holdings',
      creatorFid: 11111,
      isPublic: true,
      followedByCount: 2345,
      addresses: ['0xaaa...', '0xbbb...', '0xccc...', '0xddd...'],
      contracts: [],
      tags: ['Whales', 'Trading', 'Analytics'],
      createdAt: Date.now() / 1000 - 172800,
    },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-textPrimary mb-2">
            Watchlists
          </h1>
          <p className="text-textSecondary">
            Curated collections of addresses and contracts
          </p>
        </div>
        <Button>
          <Plus className="w-5 h-5 mr-2" />
          Create
        </Button>
      </div>
      
      {/* Search */}
      <div className="flex gap-2">
        <Input
          placeholder="Search watchlists..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
        <Button>
          <Search className="w-5 h-5" />
        </Button>
      </div>
      
      {/* Trending Section */}
      <div className="flex items-center space-x-2">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-bold text-textPrimary">
          Trending Watchlists
        </h2>
      </div>
      
      {/* Watchlist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockWatchlists.map((watchlist) => (
          <WatchlistCard
            key={watchlist.id}
            watchlist={watchlist}
            onFollow={() => console.log('Follow', watchlist.id)}
          />
        ))}
      </div>
      
      {mockWatchlists.length === 0 && (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto">
            <Plus className="w-8 h-8 text-textSecondary" />
          </div>
          <h3 className="text-xl font-semibold text-textPrimary">
            No watchlists yet
          </h3>
          <p className="text-textSecondary max-w-md mx-auto">
            Create your first watchlist to start tracking addresses and contracts
          </p>
          <Button>
            <Plus className="w-5 h-5 mr-2" />
            Create Watchlist
          </Button>
        </div>
      )}
    </div>
  );
}
