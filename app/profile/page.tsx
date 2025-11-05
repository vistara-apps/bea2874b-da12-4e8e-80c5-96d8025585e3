'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { User, Wallet, List, MessageSquare } from 'lucide-react';

export default function ProfilePage() {
  // Mock user data
  const userData = {
    fid: 12345,
    username: 'basebuilder',
    displayName: 'Base Builder',
    pfpUrl: '',
    custodyAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    stats: {
      watchlists: 3,
      annotations: 12,
      followers: 156,
    },
  };
  
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold text-textPrimary">{userData.displayName}</h1>
              <p className="text-textSecondary">@{userData.username}</p>
              <Badge variant="primary" className="mt-2">FID: {userData.fid}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6 text-center">
            <List className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-textPrimary">{userData.stats.watchlists}</p>
            <p className="text-sm text-textSecondary">Watchlists</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6 text-center">
            <MessageSquare className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold text-textPrimary">{userData.stats.annotations}</p>
            <p className="text-sm text-textSecondary">Annotations</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6 text-center">
            <User className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold text-textPrimary">{userData.stats.followers}</p>
            <p className="text-sm text-textSecondary">Followers</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Wallet Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wallet className="w-5 h-5" />
            <span>Connected Wallet</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <code className="text-sm text-textSecondary font-mono block mb-4">
            {userData.custodyAddress}
          </code>
          <Button variant="outline" size="sm" className="w-full">
            Disconnect Wallet
          </Button>
        </CardContent>
      </Card>
      
      {/* Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            Notification Preferences
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Privacy Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start text-danger">
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
