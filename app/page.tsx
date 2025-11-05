'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { FeedItem } from '@/components/features/FeedItem';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Transaction } from '@/lib/types';
import { RefreshCw, TrendingUp } from 'lucide-react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
  useEffect(() => {
    sdk.actions.ready();
  }, []);
  
  // Mock data for demonstration
  useEffect(() => {
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
        gasPrice: '20000000000',
        status: 'confirmed',
      },
      {
        hash: '0xfedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321',
        from: '0x1111111111111111111111111111111111111111',
        to: '0x2222222222222222222222222222222222222222',
        value: '2000000000000000000',
        timestamp: Math.floor(Date.now() / 1000) - 900,
        blockNumber: 12345676,
        gasUsed: '50000',
        gasPrice: '25000000000',
        contractMethod: 'swap',
        status: 'confirmed',
      },
    ];
    
    setTimeout(() => {
      setTransactions(mockTransactions);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            <CardTitle className="text-2xl">Your Onchain Feed</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-textSecondary">
            Track significant transactions and contract interactions on Base in real-time.
          </p>
        </CardContent>
      </Card>
      
      {/* Feed Controls */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-textPrimary">Recent Activity</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          isLoading={isLoading}
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>
      
      {/* Transaction Feed */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent>
                  <div className="h-20 bg-surface rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : transactions.length > 0 ? (
          transactions.map((tx) => (
            <FeedItem key={tx.hash} transaction={tx} />
          ))
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-textSecondary">No transactions found. Start following addresses to see activity!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
