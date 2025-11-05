'use client';

import { Users, Eye, CheckCircle2 } from 'lucide-react';

interface WatchlistCardProps {
  name: string;
  description: string;
  creator: string;
  followers: number;
  addresses: number;
  isFollowing: boolean;
}

export function WatchlistCard({
  name,
  description,
  creator,
  followers,
  addresses,
  isFollowing,
}: WatchlistCardProps) {
  return (
    <div className="card hover:border-accent/50 transition-all cursor-pointer group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted line-clamp-2">{description}</p>
        </div>
        {isFollowing && (
          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 ml-2" />
        )}
      </div>

      <div className="flex items-center gap-4 text-sm text-muted mb-4">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{followers.toLocaleString()} followers</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          <span>{addresses} addresses</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold">
            {creator.charAt(0).toUpperCase()}
          </div>
          <span className="text-sm text-muted">{creator}</span>
        </div>
        <button
          className={isFollowing ? 'btn-secondary text-sm' : 'btn-primary text-sm'}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
}
