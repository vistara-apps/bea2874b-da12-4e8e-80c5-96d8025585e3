'use client';

import { useState } from 'react';
import { AddressCard } from '@/components/features/AddressCard';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Address } from '@/lib/types';
import { Search, Filter } from 'lucide-react';

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'contracts' | 'eoa'>('all');
  
  // Mock data
  const mockAddresses: Address[] = [
    {
      address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
      knownName: 'Uniswap V3 Router',
      type: 'Contract',
      balance: '1234.56',
      transactionCount: 15678,
    },
    {
      address: '0x1234567890123456789012345678901234567890',
      type: 'EOA',
      balance: '45.23',
      transactionCount: 234,
    },
    {
      address: '0x9876543210987654321098765432109876543210',
      knownName: 'Base Bridge',
      type: 'Contract',
      balance: '98765.43',
      transactionCount: 45678,
    },
  ];
  
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'contracts', label: 'Contracts' },
    { value: 'eoa', label: 'Wallets' },
  ];
  
  const filteredAddresses = mockAddresses.filter((addr) => {
    if (selectedFilter === 'contracts') return addr.type === 'Contract';
    if (selectedFilter === 'eoa') return addr.type === 'EOA';
    return true;
  });
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-textPrimary mb-2">
          Explore Contracts
        </h1>
        <p className="text-textSecondary">
          Discover and analyze smart contracts on Base
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Search by address or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button>
            <Search className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-textSecondary" />
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value as any)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedFilter === filter.value
                    ? 'bg-primary text-white'
                    : 'bg-surface text-textSecondary hover:text-textPrimary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Results */}
      <div className="space-y-4">
        {filteredAddresses.map((address) => (
          <AddressCard key={address.address} address={address} />
        ))}
      </div>
      
      {filteredAddresses.length === 0 && (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto">
            <Search className="w-8 h-8 text-textSecondary" />
          </div>
          <h3 className="text-xl font-semibold text-textPrimary">
            No results found
          </h3>
          <p className="text-textSecondary">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}
