import Image from "next/image";
import Link from "next/link";


export default function ArtCard({art}) {
   const {_id,title,price,image,description,createdAt,companyId,category,artistMail}=art

  return (
    <Link className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition"
    href={`/browse/${_id}`}>
  
      <div className="w-full h-48 relative">
        <Image
        loading="eager"
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Artwork Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-purple-700">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-md font-semibold text-green-600">${price}</p>
      </div>
    </Link>
  );
}
