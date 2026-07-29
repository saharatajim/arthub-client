import React from 'react';
import ArtistOverviewPage from './ArtistOverviewPage';
import { getUser } from '@/utilies/cors';
import { getArtistOrganization } from '@/utilies/action';

const ArtistProfile =async () => {
    const user=await getUser()
   
    return (
        <div>
            <ArtistOverviewPage user={user}/>
        </div>
    );
};

export default ArtistProfile;