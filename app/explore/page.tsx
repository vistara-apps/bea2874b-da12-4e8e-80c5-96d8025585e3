'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Search, TrendingUp, ExternalLink } from 'lucide-react';
import { formatAddress } from '@/lib/utils';

export default function ExplorePage() {
  const [searchAddress, setSearchAddress] = useState('');
  
  const trendingContracts = [
    { address: '0x4200000000000000000000000000000000000006', name: 'WETH', category: 'Token' },
    { address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb', name: 'Uniswap V3', category: 'DEX' },
    { address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', name: 'USDC', category: 'Token' },
  ];
  
  const handleSearch = () => {
    if (searchAddress) {
      window.open(`https://basescan.org/address/${searchAddress}`, '_blank');
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-br from-success/20 to-primary/20 border-success/30">
        <CardHeader>
          <CardTitle className="text-2xl">Explore Contracts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-textSecondary">
            Search and analyze smart contracts on Base
          </p>
        </CardContent>
      </Card>
      
      {/* Search Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="text"
              placeholder="Enter contract address (0x...)"
              value={searchAddress}
              onChange={(e) => setSearchAddress(e.target.value)}
              className="flex-1"
            />
            <Button
              variant="primary"
              onClick={handleSearch}
              disabled={!searchAddress}
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Trending Contracts */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-textPrimary">Trending Contracts</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingContracts.map((contract) => (
            <Card key={contract.address} hover>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{contract.name}</CardTitle>
                  <Badge variant="primary">{contract.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <code className="text-sm text-textSecondary font-mono block mb-3">
                  {formatAddress(contract.address, 6)}
                </code>
                <a
                  href={`https://basescan.org/address/${contract.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-primary hover:text-accent text-sm transition-colors"
                >
                  <span>View on BaseScan</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
