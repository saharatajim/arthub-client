"use client";
import Link from "next/link";

export default function BoughtArtworksGalleryDemo({getPurchase}) {
  // Dummy purchased artworks
  const artworks =getPurchase

  return (
    <section className="w-full px-6 py-10  font-sans">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        🎨 Bought Artworks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {artworks.map((art) => (
          <div
            key={art._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">{art.title}</h3>
              <Link
                href={`/browse/${art.productId}`}
                className="mt-2 inline-block text-blue-600 font-semibold hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
