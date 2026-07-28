
import ArtCard from "@/app/components/ArtCard";
import { getArtistArtwork } from "@/utilies/action";


export default async function BrowseArtworkPage() {

    
    const artworks=await getArtistArtwork()
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        Browse Artworks
      </h2>


      {/* 🔍 Search & Filter Bar */}
      <div className="bg-gray-50 border rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search by title/artist */}
          <input
            type="text"
            placeholder="Search by title or artist..."
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          {/* Category filter */}
          <select className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option value="">All Categories</option>
            <option value="painting">Painting</option>
            <option value="sculpture">Sculpture</option>
            <option value="digital">Digital Art</option>
          </select>

          {/* Price range */}
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min Price"
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="number"
              placeholder="Max Price"
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Sorting */}
          <select className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option value="newest">Newest</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artworks.map((art, index) => (
          <ArtCard
            key={index}
             art={art}
          />
        ))}
      </div>
    </div>
  );
}
