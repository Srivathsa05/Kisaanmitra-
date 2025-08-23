import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Loader2, Wifi, WifiOff } from "lucide-react";

// Enhanced loading skeleton for cards
export const CardSkeleton = () => (
  <Card className="animate-pulse">
    <CardHeader>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[160px]" />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[60%]" />
      </div>
    </CardContent>
  </Card>
);

// Loading spinner with text
export const LoadingSpinner = ({ text = "Loading..." }: { text?: string }) => (
  <div className="flex flex-col items-center justify-center p-8 space-y-4">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
    <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
  </div>
);

// Network status indicator
export const NetworkStatus = ({ isOnline }: { isOnline: boolean }) => (
  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
    isOnline 
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  }`}>
    {isOnline ? <Wifi className="h-3 w-3" /> : <WifiOff className="h-3 w-3" />}
    <span>{isOnline ? 'Online' : 'Offline'}</span>
  </div>
);

// Enhanced table skeleton
export const TableSkeleton = ({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) => (
  <div className="space-y-3">
    {/* Header */}
    <div className="flex space-x-4">
      {Array.from({ length: cols }).map((_, i) => (
        <Skeleton key={i} className="h-4 flex-1" />
      ))}
    </div>
    {/* Rows */}
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="flex space-x-4">
        {Array.from({ length: cols }).map((_, colIndex) => (
          <Skeleton key={colIndex} className="h-8 flex-1" />
        ))}
      </div>
    ))}
  </div>
);

// Shimmer effect for images
export const ImageSkeleton = ({ className = "w-full h-48" }: { className?: string }) => (
  <div className={`${className} bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg relative overflow-hidden`}>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
  </div>
);
