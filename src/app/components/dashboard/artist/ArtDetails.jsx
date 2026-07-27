"use client";
import Image from "next/image";


export default function ArtDetails({ artwork, artId,userMail }) {


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

           
           
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
           

          

      <form action={"/api/payment"} method="POST">
         <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
            >
              Buy Now
            </button>
  <input className="hidden" readOnly name="productId" value={artId} />
  <input className="hidden" readOnly name="title" value={artwork.title} />
  <input className="hidden" readOnly name="price" value={artwork.price} />

  <input className="hidden" readOnly name="sellerMail" value={artwork.artistMail} />
</form>

           
          </div>
        </div>
      </div>
    </div>
  );
}
