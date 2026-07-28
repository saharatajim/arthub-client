"use client";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600 border-opacity-70"></div>

      {/* Text */}
      <p className="text-lg font-semibold text-purple-700">Loading artworks...</p>

      {/* Skeleton cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse border rounded-lg p-4 shadow-sm bg-gray-50"
          >
            <div className="h-40 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
