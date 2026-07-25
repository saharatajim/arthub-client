import AddArtworkPage from '@/app/components/dashboard/artist/AddArtworkPage';
import { getArtistOrganization } from '@/utilies/action';
import { getUser } from '@/utilies/cors';
import React from 'react';

const AddArtwork = async() => {
      const user=await getUser()
      const ArtistEmail=user?.email
      const company=await getArtistOrganization(ArtistEmail)
    
      
    return (
        <div className='container mx-auto'>
            <AddArtworkPage ArtistEmail={ArtistEmail} company={company} />
        </div>
    );
};

export default AddArtwork