'use client';

import { Watchlist } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Users, Eye } from 'lucide-react';

interface WatchlistCardProps {
  watchlist: Watchlist;
  onFollow?: () => void;
}

export function WatchlistCard({ watchlist, onFollow }: WatchlistCardProps) {
  return (
    <Card hover className="mb-4">
      <CardHeader>
        <CardTitle>{watchlist.name}</CardTitle>
        <CardDescription>{watchlist.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-textSecondary">
            <Eye className="w-4 h-4" />
            <span>{watchlist.addresses.length + watchlist.contracts.length} addresses</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-textSecondary">
            <Users className="w-4 h-4" />
            <span>{watchlist.followedByCount} followers</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {watchlist.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
            {watchlist.tags.length > 3 && (
              <Badge variant="default">+{watchlist.tags.length - 3}</Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button
          variant="primary"
          size="sm"
          className="w-full"
          onClick={onFollow}
        >
          Follow Watchlist
        </Button>
      </CardFooter>
    </Card>
  );
}
