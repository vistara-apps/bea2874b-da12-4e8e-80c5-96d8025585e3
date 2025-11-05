'use client';

import { useState } from 'react';
import { WatchlistCard } from '@/components/features/WatchlistCard';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Watchlist } from '@/lib/types';
import { Plus, Search } from 'lucide-react';

export default function WatchlistsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock watchlists
  const mockWatchlists: Watchlist[] = [
    {
      id: '1',
      name: 'DeFi Protocols',
      description: 'Major DeFi protocols on Base',
      creatorFid: 12345,
      isPublic: true,
      followedByCount: 1234,
      addresses: ['0x1234...', '0x5678...'],
      contracts: ['0xabcd...'],
      tags: ['DeFi', 'Protocols', 'Base'],
      createdAt: Date.now() / 1000,
    },
    {
      id: '2',
      name: 'Whale Wallets',
      description: 'High-value wallet addresses',
      creatorFid: 67890,
      isPublic: true,
      followedByCount: 856,
      addresses: ['0x9999...', '0x8888...', '0x7777...'],
      contracts: [],
      tags: ['Whales', 'Trading'],
      createdAt: Date.now() / 1000,
    },
    {
      id: '3',
      name: 'NFT Collections',
      description: 'Popular NFT contracts on Base',
      creatorFid: 11111,
      isPublic: true,
      followedByCount: 542,
      addresses: [],
      contracts: ['0xaaaa...', '0xbbbb...'],
      tags: ['NFT', 'Collections', 'Art'],
      createdAt: Date.now() / 1000,
    },
  ];
  
  const filteredWatchlists = mockWatchlists.filter((w) =>
    w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    w.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30">
        <CardHeader>
          <CardTitle className="text-2xl">Watchlists</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-textSecondary mb-4">
            Discover and follow curated lists of addresses and contracts
          </p>
          <Button variant="primary" className="w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Create Watchlist
          </Button>
        </CardContent>
      </Card>
      
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textSecondary" />
        <Input
          type="text"
          placeholder="Search watchlists..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      
      {/* Watchlist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWatchlists.map((watchlist) => (
          <WatchlistCard
            key={watchlist.id}
            watchlist={watchlist}
            onFollow={() => console.log('Follow:', watchlist.id)}
          />
        ))}
      </div>
      
      {filteredWatchlists.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-textSecondary">No watchlists found matching your search.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
