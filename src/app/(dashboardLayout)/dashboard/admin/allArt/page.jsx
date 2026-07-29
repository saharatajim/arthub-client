import { getArtistArtwork } from "@/utilies/action";
import Action from "./Action";

export default async function ManageAllArtworks() {
  const artworks = await getArtistArtwork();

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage All Artworks</h2>

      {artworks.length === 0 ? (
        // Empty State UI
        <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-lg shadow-md p-10">
          <svg
            className="w-16 h-16 text-purple-400 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
          <h2 className="text-xl font-semibold text-purple-600">
            No Artworks Found
          </h2>
          <p className="text-gray-600 mt-2">
            There are no artworks available right now.
          </p>
        </div>
      ) : (
        // Table UI
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Artist</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {artworks.map((art, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">{art.title}</td>
                  <td className="py-3 px-4">{art.artistMail}</td>
                  <td className="py-3 px-4">{art.price}</td>
                  <td className="py-3 px-4 text-center">
                    <Action id={art._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
