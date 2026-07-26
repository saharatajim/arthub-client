"use client";
import Image from "next/image";
import { useState } from "react";

export default function ArtDetails({ artwork, artId,userMail }) {
    console.log(artwork,artId);
  const [buyQuantity, setBuyQuantity] = useState(1);

  const handleBuyNow = () => {
    const purchaseData = {
      productId: artId,
      title: artwork.title,
      price: artwork.price,
      quantity: buyQuantity,
      totalPrice: artwork.price * buyQuantity,
      sellerMail: artwork.artistMail,
      buyerMail: userMail, // replace with logged-in buyer
      createdAt: new Date().toISOString(),
    };
    console.log("Purchase Object:", purchaseData);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Image */}
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
            <p className="text-gray-600 mb-4">Available: {artwork.quantity}</p>
            <p className="text-lg font-semibold text-green-600 mb-2">${artwork.price}</p>

            {/* Quantity Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Quantity</label>
              <input
                type="number"
                min="1"
                max={artwork.quantity}
                value={buyQuantity}
                onChange={(e) => setBuyQuantity(Number(e.target.value))}
                className="w-24 border rounded px-2 py-1"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleBuyNow}
              className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
