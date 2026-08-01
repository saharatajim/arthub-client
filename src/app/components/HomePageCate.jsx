"use client";

import Link from "next/link";
import React from "react";

const HomePageCate = () => {
  const categories = [
    { name: "All Categories", href: "/browse", color: "from-purple-500 to-pink-500" },
    { name: "Painting", href: "/browse?category=Painting", color: "from-blue-500 to-cyan-500" },
    { name: "Sculpture", href: "/browse?category=Sculpture", color: "from-green-500 to-emerald-500" },
    { name: "Digital Art", href: "/browse?category=Digital", color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="w-full p-6  shadow rounded mt-6">
      <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            href={cat.href}
            className={`relative flex items-center justify-center h-32 rounded-xl shadow-lg 
              bg-gradient-to-r  text-black font-semibold text-lg 
              transform hover:scale-105 transition duration-300 cursor-pointer`}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePageCate;
