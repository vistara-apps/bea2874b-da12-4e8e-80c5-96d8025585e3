'use client';

import { ArrowRight, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface ActivityFeedItemProps {
  type: 'transfer' | 'swap' | 'contract';
  from: string;
  to: string;
  value: string;
  timestamp: string;
  status: 'pending' | 'confirmed' | 'failed';
}

export function ActivityFeedItem({
  type,
  from,
  to,
  value,
  timestamp,
  status,
}: ActivityFeedItemProps) {
  const getStatusIcon = () => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle2 className="w-4 h-4 text-success" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-warning" />;
      case 'failed':
        return <AlertCircle className="w-4 h-4 text-danger" />;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'transfer':
        return 'bg-blue-500/20 text-blue-400';
      case 'swap':
        return 'bg-purple-500/20 text-purple-400';
      case 'contract':
        return 'bg-green-500/20 text-green-400';
    }
  };

  return (
    <div className="card hover:border-accent/50 transition-all cursor-pointer group">
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-lg ${getTypeColor()} flex items-center justify-center flex-shrink-0`}>
          <ArrowRight className="w-5 h-5" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-semibold px-2 py-1 rounded ${getTypeColor()}`}>
              {type.toUpperCase()}
            </span>
            {getStatusIcon()}
            <span className="text-xs text-muted">{timestamp}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm mb-1">
            <span className="font-mono text-fg">{from}</span>
            <ArrowRight className="w-4 h-4 text-muted" />
            <span className="font-mono text-fg">{to}</span>
          </div>
          
          <p className="text-lg font-bold text-accent">{value}</p>
        </div>
      </div>
    </div>
  );
}
