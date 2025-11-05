'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { FeedItem } from '@/components/features/FeedItem';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Transaction } from '@/lib/types';
import { Search, TrendingUp } from 'lucide-react';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
  useEffect(() => {
    sdk.actions.ready();
    setIsReady(true);
  }, []);
  
  // Mock data for demonstration
  const mockTransactions: Transaction[] = [
    {
      hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
      from: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
      to: '0x1234567890123456789012345678901234567890',
      value: '1500000000000000000',
      timestamp: Math.floor(Date.now() / 1000) - 300,
      blockNumber: 12345678,
      gasUsed: '21000',
      gasPrice: '20000000000',
      contractMethod: 'transfer',
      status: 'confirmed',
    },
    {
      hash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
      from: '0x9876543210987654321098765432109876543210',
      to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
      value: '500000000000000000',
      timestamp: Math.floor(Date.now() / 1000) - 600,
      blockNumber: 12345677,
      gasUsed: '21000',
      gasPrice: '18000000000',
      status: 'confirmed',
    },
    {
      hash: '0xfedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321',
      from: '0x1111111111111111111111111111111111111111',
      to: '0x2222222222222222222222222222222222222222',
      value: '2000000000000000000',
      timestamp: Math.floor(Date.now() / 1000) - 120,
      blockNumber: 12345679,
      gasUsed: '45000',
      gasPrice: '22000000000',
      contractMethod: 'swap',
      status: 'pending',
    },
  ];
  
  if (!isReady) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-textSecondary">Loading Onchain Lens...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-textPrimary">
          Onchain Lens
        </h1>
        <p className="text-lg text-textSecondary max-w-2xl mx-auto">
          Discover, Track, and Share Base Onchain Intelligence with Your Farcaster Network
        </p>
      </div>
      
      {/* Search Bar */}
      <div className="flex gap-2">
        <Input
          placeholder="Search addresses, transactions, or contracts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
        <Button>
          <Search className="w-5 h-5" />
        </Button>
      </div>
      
      {/* Trending Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-textPrimary">
            Trending Activity
          </h2>
        </div>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>
      
      {/* Feed */}
      <div className="space-y-4">
        {mockTransactions.map((transaction) => (
          <FeedItem key={transaction.hash} transaction={transaction} />
        ))}
      </div>
      
      {/* Empty State */}
      {mockTransactions.length === 0 && (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto">
            <Search className="w-8 h-8 text-textSecondary" />
          </div>
          <h3 className="text-xl font-semibold text-textPrimary">
            No activity yet
          </h3>
          <p className="text-textSecondary max-w-md mx-auto">
            Connect your wallet and start following addresses to see personalized onchain activity
          </p>
          <Button>Connect Wallet</Button>
        </div>
      )}
    </div>
  );
}
