export function formatAddress(address: string, chars = 4): string {
  if (!address) return '';
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

export function formatValue(value: string, decimals = 18): string {
  const num = BigInt(value) / BigInt(10 ** decimals);
  return num.toString();
}

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  
  return date.toLocaleDateString();
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getReputationBadge(score: number): string {
  if (score >= 1000) return '🏆 Elite';
  if (score >= 500) return '⭐ Expert';
  if (score >= 100) return '✨ Trusted';
  if (score >= 10) return '👍 Active';
  return '🆕 New';
}
