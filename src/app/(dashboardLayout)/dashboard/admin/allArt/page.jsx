import { getArtistArtwork } from "@/utilies/action";
import Action from "./Action";

export default async function ManageAllArtworks() {

    const artworks=await getArtistArtwork()


  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage All Artworks</h2>

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
                  <Action id={art._id}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
