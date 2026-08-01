import { getTopArtist } from "@/utilies/action";
import { Avatar } from '@heroui/react';
export default async function TopArtists() {

const topArtist=await getTopArtist()
console.log(topArtist);
  return (
    <div className="w-full p-6  shadow rounded mt-6">
      <h2 className="text-2xl font-bold mb-6">Top Artists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
       {
        topArtist.map((artist,ind)=>
        <div className=" relative flex flex-col items-center justify-center h-32 rounded-xl shadow-lg 
              bg-gradient-to-r  text-black font-semibold text-lg 
              transform hover:scale-105 transition duration-300 cursor-pointer" key={ind}> 
           <Avatar>
           <Avatar.Image alt="John Doe" src={artist.image} />
            <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <h1  className="text-xxl font-bold mb-6">{artist.name}</h1>
        </div>
        )

       }
      </div>
    </div>
  );
}
