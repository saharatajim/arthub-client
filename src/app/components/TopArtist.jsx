"use client";

import Link from "next/link";

export default function TopArtists() {
  const artists = [
    {
      name: "Sarah Wilson",
      sales: 125,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      verified: true
    },
    {
      name: "James Carter",
      sales: 150,
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      verified: true
    },
    {
      name: "Olivia Smith",
      sales: 97,
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      verified: true
    }
  ];

  return (
    <div className="w-full p-6  shadow rounded mt-6">
      <h2 className="text-2xl font-bold mb-6">Top Artists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {artists.map((cat, idx) => (
          <div
            key={idx}
       
            className={`relative flex items-center justify-center h-32 rounded-xl shadow-lg 
              bg-gradient-to-r  font-semibold text-lg 
              transform hover:scale-105 transition duration-300 cursor-pointer`}
          >
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
}
