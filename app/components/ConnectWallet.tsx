'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const handleConnect = () => {
    // Simulate wallet connection
    setIsConnected(true);
    setAddress('0x1234...5678');
  };

  if (isConnected) {
    return (
      <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg hover:border-accent transition-colors">
        <div className="w-2 h-2 bg-success rounded-full"></div>
        <span className="text-sm font-medium text-fg">{address}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
    >
      <Wallet className="w-4 h-4" />
      <span className="text-sm font-medium">Connect</span>
    </button>
  );
}
