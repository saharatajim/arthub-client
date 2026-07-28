'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      {/* Icon */}
      <div className="bg-red-100 p-6 rounded-full mb-6">
        <svg
          className="w-12 h-12 text-red-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-red-600 mb-2">Something went wrong!</h2>
      <p className="text-gray-600 mb-6">
        An unexpected error occurred. Please try again.
      </p>

      {/* Retry Button */}
      <button
        onClick={() => reset()}
        className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  )
}
