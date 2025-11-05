import { Transaction } from '@/lib/types';
import { formatAddress, formatTimestamp, formatValue } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface FeedItemProps {
  transaction: Transaction;
}

export function FeedItem({ transaction }: FeedItemProps) {
  const statusVariant = {
    pending: 'warning' as const,
    confirmed: 'success' as const,
    failed: 'danger' as const,
  };
  
  return (
    <Card hover glow className="space-y-3">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant={statusVariant[transaction.status]}>
              {transaction.status}
            </Badge>
            {transaction.contractMethod && (
              <Badge>{transaction.contractMethod}</Badge>
            )}
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-textSecondary">
            <span className="font-mono">{formatAddress(transaction.from)}</span>
            <ArrowRight className="w-4 h-4" />
            <span className="font-mono">{formatAddress(transaction.to)}</span>
          </div>
        </div>
        
        <a
          href={`https://basescan.org/tx/${transaction.hash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      
      <div className="flex items-center justify-between pt-3 border-t border-white border-opacity-10">
        <div>
          <p className="text-xs text-textSecondary">Value</p>
          <p className="text-lg font-semibold text-textPrimary">
            {formatValue(transaction.value)} ETH
          </p>
        </div>
        
        <div className="text-right">
          <p className="text-xs text-textSecondary">Time</p>
          <p className="text-sm text-textPrimary">
            {formatTimestamp(transaction.timestamp)}
          </p>
        </div>
      </div>
    </Card>
  );
}
