'use client';

import { useState } from 'react';
import { Search, TrendingUp, Activity } from 'lucide-react';

export function ContractExplorer() {
  const [address, setAddress] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) return;
    
    setIsSearching(true);
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter contract address (0x...)"
          className="w-full px-4 py-3 pl-12 bg-surface border border-border rounded-lg text-fg placeholder-muted focus:outline-none focus:border-accent transition-colors"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
        <button
          type="submit"
          disabled={!address || isSearching}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-accent text-white text-sm rounded-md hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </form>

      {address && !isSearching && (
        <div className="p-6 bg-surface rounded-lg border border-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-fg mb-1">Contract Details</h3>
              <code className="text-sm text-muted font-mono">{address}</code>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-success/20 text-success rounded-md text-sm">
              <Activity className="w-4 h-4" />
              Active
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-bg rounded-lg">
              <p className="text-xs text-muted mb-1">Total Transactions</p>
              <p className="text-2xl font-bold text-fg">1,234</p>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +12.5%
              </p>
            </div>
            <div className="p-4 bg-bg rounded-lg">
              <p className="text-xs text-muted mb-1">Unique Users</p>
              <p className="text-2xl font-bold text-fg">567</p>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +8.3%
              </p>
            </div>
            <div className="p-4 bg-bg rounded-lg">
              <p className="text-xs text-muted mb-1">Total Volume</p>
              <p className="text-2xl font-bold text-fg">$2.4M</p>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +15.7%
              </p>
            </div>
            <div className="p-4 bg-bg rounded-lg">
              <p className="text-xs text-muted mb-1">Gas Used</p>
              <p className="text-2xl font-bold text-fg">45.2K</p>
              <p className="text-xs text-muted mt-1">Avg: 36.7</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-fg">Recent Interactions</h4>
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 bg-bg rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fg">Transfer</p>
                    <p className="text-xs text-muted">0x1234...5678 → 0xabcd...ef01</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-accent">1.5 ETH</p>
                  <p className="text-xs text-muted">{i * 5}m ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
