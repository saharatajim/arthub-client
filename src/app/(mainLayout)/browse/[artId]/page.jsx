import ArtDetails from '@/app/components/dashboard/artist/ArtDetails';
import { getArtworkDetails } from '@/utilies/action';
import { getUser } from '@/utilies/cors';

import React from 'react';

const ArtDetailsPage = async({params}) => {
    const {artId}=await params
    const artwork=await getArtworkDetails(artId)
    const user=await getUser()
    const userMail=user?.email

    console.log(userMail);


    return (
          <div>
     <ArtDetails artwork={artwork} artId={artId} userMail={userMail}/>
    </div>
    );
};

export default ArtDetailsPage;