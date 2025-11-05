'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { getReputationBadge } from '@/lib/utils';
import { User, List, MessageSquare, Settings2 } from 'lucide-react';

export default function ProfilePage() {
  // Mock user data
  const mockUser = {
    fid: 12345,
    username: 'cryptoexplorer',
    displayName: 'Crypto Explorer',
    pfpUrl: '',
    reputationScore: 567,
    followedAddresses: 23,
    followedWatchlists: 8,
    userWatchlists: 3,
    annotations: 45,
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-textPrimary mb-2">
          Profile
        </h1>
        <p className="text-textSecondary">
          Manage your onchain intelligence preferences
        </p>
      </div>
      
      {/* Profile Card */}
      <Card className="space-y-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-textPrimary">
                {mockUser.displayName}
              </h2>
              <p className="text-textSecondary">@{mockUser.username}</p>
              <Badge className="mt-2">
                {getReputationBadge(mockUser.reputationScore)}
              </Badge>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Settings2 className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white border-opacity-10">
          <div className="text-center">
            <p className="text-2xl font-bold text-textPrimary">
              {mockUser.followedAddresses}
            </p>
            <p className="text-sm text-textSecondary">Addresses</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-textPrimary">
              {mockUser.followedWatchlists}
            </p>
            <p className="text-sm text-textSecondary">Following</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-textPrimary">
              {mockUser.userWatchlists}
            </p>
            <p className="text-sm text-textSecondary">Watchlists</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-textPrimary">
              {mockUser.annotations}
            </p>
            <p className="text-sm text-textSecondary">Annotations</p>
          </div>
        </div>
      </Card>
      
      {/* Activity Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card hover className="space-y-4">
          <div className="flex items-center space-x-2">
            <List className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-textPrimary">
              My Watchlists
            </h3>
          </div>
          <p className="text-textSecondary">
            Manage your curated collections of addresses and contracts
          </p>
          <Button variant="outline" className="w-full">
            View Watchlists
          </Button>
        </Card>
        
        <Card hover className="space-y-4">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-textPrimary">
              My Annotations
            </h3>
          </div>
          <p className="text-textSecondary">
            Review and manage your onchain annotations and insights
          </p>
          <Button variant="outline" className="w-full">
            View Annotations
          </Button>
        </Card>
      </div>
      
      {/* Settings */}
      <Card className="space-y-4">
        <h3 className="text-lg font-bold text-textPrimary">
          Notification Preferences
        </h3>
        <div className="space-y-3">
          {[
            'New activity on followed addresses',
            'Watchlist updates',
            'Annotation replies',
            'Trending contracts',
          ].map((pref) => (
            <label key={pref} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 rounded border-white border-opacity-20 bg-surface text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg"
              />
              <span className="text-textPrimary">{pref}</span>
            </label>
          ))}
        </div>
      </Card>
    </div>
  );
}
