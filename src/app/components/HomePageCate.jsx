import Link from 'next/link';
import React from 'react';

const HomePageCate = () => {
    return (
        <div>
            <div className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 grid grid-cols-1 gap-2">
  <Link href="/browse" className="cursor-pointer hover:text-purple-600">
    All Categories
  </Link>
  <Link href="/browse?category=Painting" className="cursor-pointer hover:text-purple-600">
    Painting
  </Link>
  <Link href="/browse?category=Sculpture" className="cursor-pointer hover:text-purple-600">
    Sculpture
  </Link>
  <Link href="/browse?category=Digital" className="cursor-pointer hover:text-purple-600">
    Digital Art
  </Link>
</div>

        </div>
    );
};

export default HomePageCate;