'use client';

import { useState } from 'react';
import { Search, ExternalLink, Activity, Users, TrendingUp } from 'lucide-react';

export function ContractExplorer() {
  const [address, setAddress] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!address) return;
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => setIsSearching(false), 1000);
  };

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="card">
        <label className="block text-sm font-semibold mb-2">
          Contract Address
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="0x..."
            className="flex-1 bg-bg border border-white/10 rounded-lg px-4 py-3 text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
          />
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className="btn-primary px-6"
          >
            {isSearching ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Trending Contracts */}
      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-accent" />
          Trending Contracts
        </h3>
        
        <div className="space-y-3">
          <TrendingContractCard
            name="Uniswap V3 Router"
            address="0x2626...4f2a"
            interactions={15234}
            volume="$2.4M"
          />
          
          <TrendingContractCard
            name="Base NFT Collection"
            address="0x8b3c...9d2e"
            interactions={8456}
            volume="145 ETH"
          />
          
          <TrendingContractCard
            name="Lending Protocol"
            address="0x9f2a...4b1c"
            interactions={6789}
            volume="$1.8M"
          />
        </div>
      </div>
    </div>
  );
}

interface TrendingContractCardProps {
  name: string;
  address: string;
  interactions: number;
  volume: string;
}

function TrendingContractCard({
  name,
  address,
  interactions,
  volume,
}: TrendingContractCardProps) {
  return (
    <div className="card hover:border-accent/50 transition-all cursor-pointer group">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="font-bold group-hover:text-accent transition-colors">
            {name}
          </h4>
          <p className="text-sm text-muted font-mono">{address}</p>
        </div>
        <ExternalLink className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
      </div>
      
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-accent" />
          <span className="text-muted">{interactions.toLocaleString()} interactions</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-accent" />
          <span className="text-muted">{volume} volume</span>
        </div>
      </div>
    </div>
  );
}
