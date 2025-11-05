import { Watchlist } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Users, Eye } from 'lucide-react';

interface WatchlistCardProps {
  watchlist: Watchlist;
  onFollow?: () => void;
}

export function WatchlistCard({ watchlist, onFollow }: WatchlistCardProps) {
  return (
    <Card hover glow className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-textPrimary mb-2">
          {watchlist.name}
        </h3>
        <p className="text-sm text-textSecondary line-clamp-2">
          {watchlist.description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {watchlist.tags.slice(0, 3).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
        {watchlist.tags.length > 3 && (
          <Badge>+{watchlist.tags.length - 3} more</Badge>
        )}
      </div>
      
      <div className="flex items-center justify-between pt-3 border-t border-white border-opacity-10">
        <div className="flex items-center space-x-4 text-sm text-textSecondary">
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{watchlist.addresses.length + watchlist.contracts.length}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{watchlist.followedByCount}</span>
          </div>
        </div>
        
        {onFollow && (
          <Button size="sm" onClick={onFollow}>
            Follow
          </Button>
        )}
      </div>
    </Card>
  );
}
