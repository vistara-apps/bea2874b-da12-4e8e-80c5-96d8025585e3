import { Address } from '@/lib/types';
import { formatAddress } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ExternalLink } from 'lucide-react';

interface AddressCardProps {
  address: Address;
}

export function AddressCard({ address: addressData }: AddressCardProps) {
  return (
    <Card hover className="space-y-3">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant={addressData.type === 'Contract' ? 'warning' : 'default'}>
              {addressData.type}
            </Badge>
            {addressData.knownName && (
              <span className="text-sm font-medium text-textPrimary">
                {addressData.knownName}
              </span>
            )}
          </div>
          
          <p className="font-mono text-sm text-textSecondary">
            {formatAddress(addressData.address, 8)}
          </p>
        </div>
        
        <a
          href={`https://basescan.org/address/${addressData.address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      
      {(addressData.balance || addressData.transactionCount) && (
        <div className="flex items-center justify-between pt-3 border-t border-white border-opacity-10">
          {addressData.balance && (
            <div>
              <p className="text-xs text-textSecondary">Balance</p>
              <p className="text-sm font-semibold text-textPrimary">
                {addressData.balance} ETH
              </p>
            </div>
          )}
          
          {addressData.transactionCount && (
            <div className="text-right">
              <p className="text-xs text-textSecondary">Transactions</p>
              <p className="text-sm font-semibold text-textPrimary">
                {addressData.transactionCount}
              </p>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
