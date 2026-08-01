import { getLetestArts } from '@/utilies/action';
import React from 'react';
import ArtCard from './ArtCard';

const FeaturedArts = async() => {
    const LatestArts=await getLetestArts()
    console.log(LatestArts);
    return (
        <div className='container mx-auto p-15'>
           <h1 className='text-2xl font-bold mb-6'>Featured artworks</h1>
           <div className='grid lg:grid-cols-3 gap-5'>
            {
                LatestArts.map((art,ind)=><ArtCard   key={ind} art={art} />)
            }
           </div>
        </div>
    );
};

export default FeaturedArts;