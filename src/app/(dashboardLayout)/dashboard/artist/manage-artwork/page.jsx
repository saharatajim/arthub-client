

import { getArtistArtwork } from "@/utilies/action";
import { getUser } from "@/utilies/cors";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageArtworks = async() => {
 
  const user=await getUser()
     const artistMail=user.email
     const artworks=await getArtistArtwork(artistMail)

  return (
    <div className="p-6 flex-1 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Manage Artworks</h2>

      {/* Table for medium+ screens */}
      <div className="hidden md:block bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-purple-100">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {artworks.map((art,index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{art.title}</td>
                <td className="p-3">${art.price}</td>
                <td className="p-3 flex gap-3">
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                    <FaEdit /> Edit
                  </button>
                  <button
                  
                    className="flex items-center gap-1 text-red-600 hover:text-red-800"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for small screens */}
      <div className="md:hidden space-y-4">
        {artworks.map((art) => (
          <div
            key={art.id}
            className="bg-white shadow rounded-lg p-4 flex flex-col gap-2"
          >
            <h3 className="text-lg font-semibold text-purple-700">
              {art.title}
            </h3>
            <p className="text-gray-600">Price: ${art.price}</p>
            <div className="flex gap-4 mt-2">
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                <FaEdit /> Edit
              </button>
              <button
            
                className="flex items-center gap-1 text-red-600 hover:text-red-800"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageArtworks;
