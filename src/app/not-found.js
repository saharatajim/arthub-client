"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      {/* Icon */}
      <div className="bg-purple-100 p-6 rounded-full mb-6">
        <svg
          className="w-12 h-12 text-purple-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-purple-700 mb-2">Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, we couldn’t find the requested resource.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
