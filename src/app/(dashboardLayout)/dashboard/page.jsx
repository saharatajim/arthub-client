"use client";
import Image from "next/image";

export default function ArtistOverviewPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Artist Header */}
      <section className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <Image
          src="/artist-placeholder.jpg"
          alt="Artist Profile"
          width={120}
          height={120}
          className="rounded-full border object-cover"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-purple-700">Artist Name</h1>
          <p className="text-gray-600">Contemporary Painter & Digital Artist</p>
          <p className="mt-2 text-sm text-gray-500">
            Based in Dhaka, Bangladesh | Active since 2015
          </p>
        </div>
      </section>

      {/* Artist Bio */}
      <section className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-2">About the Artist</h2>
        <p className="text-gray-700 leading-relaxed">
          This artist is known for blending traditional painting techniques with
          modern digital art. Their work often explores themes of nature,
          identity, and cultural heritage. With exhibitions across Asia and
          Europe, they continue to inspire audiences worldwide.
        </p>
      </section>

      {/* Stats */}
      <section className="bg-white shadow rounded-lg p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-2xl font-bold text-purple-700">120+</p>
          <p className="text-gray-600">Artworks</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-700">15</p>
          <p className="text-gray-600">Exhibitions</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-700">8</p>
          <p className="text-gray-600">Awards</p>
        </div>
      </section>

      {/* Artworks Gallery */}
      <section className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Featured Artworks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/artwork1.jpg"
              alt="Artwork 1"
              width={300}
              height={200}
              className="object-cover w-full h-40"
            />
            <p className="p-2 text-sm text-gray-700">Sunset Over Hills</p>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/artwork2.jpg"
              alt="Artwork 2"
              width={300}
              height={200}
              className="object-cover w-full h-40"
            />
            <p className="p-2 text-sm text-gray-700">Digital Bloom</p>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/artwork3.jpg"
              alt="Artwork 3"
              width={300}
              height={200}
              className="object-cover w-full h-40"
            />
            <p className="p-2 text-sm text-gray-700">Cultural Echoes</p>
          </div>
        </div>
      </section>
    </div>
  );
}
