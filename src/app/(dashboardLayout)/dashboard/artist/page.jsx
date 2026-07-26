"use client";
import Image from "next/image";

export default function ArtistOverviewPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
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
          Known for blending traditional painting techniques with modern digital art,
          this artist explores themes of nature and identity. Their exhibitions across
          Asia have inspired audiences worldwide.
        </p>
      </section>

      {/* Company Info */}
      <section className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-2">Organization</h2>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Image
            src="/company-logo.jpg"
            alt="Company Logo"
            width={100}
            height={100}
            className="rounded border object-cover"
          />
          <div className="text-center sm:text-left">
            <p className="text-xl font-bold text-purple-700">Creative Arts Studio</p>
            <p className="text-gray-600">Founded: 2010 | Location: Dhaka</p>
            <p className="mt-2 text-sm text-gray-500">
              Mission: To inspire through art and culture.  
              Vision: Connecting heritage with modern creativity.
            </p>
          </div>
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
        </div>
      </section>
    </div>
  );
}
