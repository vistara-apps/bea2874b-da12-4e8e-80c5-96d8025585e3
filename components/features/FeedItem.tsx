'use client';

import { Transaction } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatAddress, formatTimestamp, formatValue } from '@/lib/utils';
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
    <Card hover className="mb-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant={statusVariant[transaction.status]}>
            {transaction.status.toUpperCase()}
          </Badge>
          <span className="text-xs text-textSecondary">
            {formatTimestamp(transaction.timestamp)}
          </span>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {/* From/To Addresses */}
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-textSecondary">From:</span>
            <code className="text-primary font-mono">{formatAddress(transaction.from)}</code>
            <ArrowRight className="w-4 h-4 text-textSecondary" />
            <code className="text-accent font-mono">{formatAddress(transaction.to)}</code>
          </div>
          
          {/* Value */}
          <div className="flex items-center justify-between">
            <span className="text-textSecondary text-sm">Value:</span>
            <span className="text-textPrimary font-semibold">
              {formatValue(transaction.value)} ETH
            </span>
          </div>
          
          {/* Contract Method */}
          {transaction.contractMethod && (
            <div className="flex items-center justify-between">
              <span className="text-textSecondary text-sm">Method:</span>
              <Badge variant="primary">{transaction.contractMethod}</Badge>
            </div>
          )}
          
          {/* View on Explorer */}
          <a
            href={`https://basescan.org/tx/${transaction.hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-primary hover:text-accent text-sm transition-colors"
          >
            <span>View on BaseScan</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
