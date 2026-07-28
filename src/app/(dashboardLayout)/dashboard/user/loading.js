"use client";

export default function Loading() {
  return (
    <div className=" flex  w-full justify-center" >
      {/* Centered Spinner */}
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-purple-600 border-opacity-70"></div>
    </div>
  );
}
