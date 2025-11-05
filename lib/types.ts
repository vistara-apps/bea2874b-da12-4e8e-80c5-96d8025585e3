export interface UserProfile {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl: string;
  custodyAddress: string;
  connectedWalletAddress?: string;
  followedAddresses: string[];
  followedWatchlists: string[];
  userWatchlists: string[];
}

export interface Watchlist {
  id: string;
  name: string;
  description: string;
  creatorFid: number;
  isPublic: boolean;
  followedByCount: number;
  addresses: string[];
  contracts: string[];
  tags: string[];
  createdAt: number;
}

export interface Address {
  address: string;
  knownName?: string;
  type: 'EOA' | 'Contract';
  balance?: string;
  transactionCount?: number;
}

export interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
  blockNumber: number;
  gasUsed: string;
  gasPrice: string;
  inputData?: string;
  contractMethod?: string;
  status: 'pending' | 'confirmed' | 'failed';
}

export interface Annotation {
  id: string;
  annotatorFid: number;
  targetType: 'address' | 'transaction';
  targetHash: string;
  text: string;
  tags: string[];
  timestamp: number;
  reputationScore: number;
}

export interface FeedItem {
  id: string;
  type: 'transaction' | 'annotation' | 'watchlist';
  timestamp: number;
  data: Transaction | Annotation | Watchlist;
  relevanceScore: number;
}
