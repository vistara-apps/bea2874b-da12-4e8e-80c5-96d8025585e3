'use client';

import { ArrowUpRight, MessageSquare, Share2, Clock } from 'lucide-react';

interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
  type: string;
}

export function FeedCard({ transaction }: { transaction: Transaction }) {
  const timeAgo = Math.floor((Date.now() - transaction.timestamp) / 60000);

  return (
    <div className="p-4 bg-surface rounded-lg border border-border hover:border-accent transition-all duration-200 shadow-card">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            transaction.type === 'transfer' ? 'bg-accent/20 text-accent' :
            transaction.type === 'swap' ? 'bg-success/20 text-success' :
            'bg-warning/20 text-warning'
          }`}>
            <ArrowUpRight className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-fg capitalize">{transaction.type}</p>
            <p className="text-xs text-muted flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {timeAgo}m ago
            </p>
          </div>
        </div>
        <span className="text-sm font-bold text-accent">{transaction.value}</span>
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted">From:</span>
          <code className="px-2 py-1 bg-bg rounded text-fg font-mono text-xs">{transaction.from}</code>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted">To:</span>
          <code className="px-2 py-1 bg-bg rounded text-fg font-mono text-xs">{transaction.to}</code>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-3 border-t border-border">
        <button className="flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors">
          <MessageSquare className="w-4 h-4" />
          <span>Annotate</span>
        </button>
        <button className="flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors">
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
        <a
          href={`https://basescan.org/tx/${transaction.hash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors ml-auto"
        >
          <span>View on Basescan</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
