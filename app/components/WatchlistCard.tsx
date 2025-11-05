'use client';

import { Users, Eye, Share2 } from 'lucide-react';

interface Watchlist {
  id: string;
  name: string;
  description: string;
  creatorName: string;
  followers: number;
  addresses: number;
}

export function WatchlistCard({ watchlist }: { watchlist: Watchlist }) {
  return (
    <div className="p-5 bg-surface rounded-lg border border-border hover:border-accent transition-all duration-200 shadow-card">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-fg mb-1">{watchlist.name}</h3>
          <p className="text-sm text-muted">{watchlist.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4 text-sm text-muted">
        <span className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          {watchlist.followers.toLocaleString()}
        </span>
        <span className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          {watchlist.addresses} addresses
        </span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">
            {watchlist.creatorName[0].toUpperCase()}
          </div>
          <span className="text-sm text-muted">{watchlist.creatorName}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 bg-accent text-white text-sm rounded-md hover:bg-accent/90 transition-colors">
            Follow
          </button>
          <button className="p-1.5 text-muted hover:text-accent transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
