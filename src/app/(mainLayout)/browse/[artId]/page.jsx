import { getArtworkDetails } from '@/utilies/action';
import Image from 'next/image';
import React from 'react';

const ArtDetails = async({params}) => {
    const {artId}=await params
    const artwork=await getArtworkDetails(artId)
   

    return (
          <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Side: Image + Thumbnails */}
        <div>
          <div className="relative h-100 mb-4">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-cover rounded-lg border"
            />
          </div>

        
        </div>

        {/* Right Side: Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-purple-700 mb-2">{artwork.title}</h1>
            <p className="text-gray-600 mb-4">{artwork.description}</p>

            <p className="text-lg font-semibold text-green-600 mb-2">${artwork.price}</p>
            <p className="text-sm text-gray-500 mb-2">Category: {artwork.category}</p>
            <p className="text-sm text-gray-500 mb-2">Artist: {artwork.artistMail}</p>
            <p className="text-sm text-gray-400 mb-6">
              Added on: {new Date(artwork.createdAt).toLocaleString()}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
              Buy Now
            </button>
            <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg text-lg font-semibold hover:bg-purple-100 transition">
              Add to Wishlist
            </button>
            <button className="w-full border border-gray-400 text-gray-600 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              View Studio
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ArtDetails;