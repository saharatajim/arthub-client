
import ArtCard from "@/app/components/ArtCard";
import { getArtistArtwork } from "@/utilies/action";


export default async function BrowseArtworkPage() {

    
    const artworks=await getArtistArtwork()
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        Browse Artworks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((art, index) => (
          <ArtCard
            key={index}
             art={art}
          />
        ))}
      </div>
    </div>
  );
}
