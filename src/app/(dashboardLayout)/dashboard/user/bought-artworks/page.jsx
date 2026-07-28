import React from 'react';
import BoughtArtworksGalleryDemo from './BoughtArtworksGalleryDemo';
import { getUser } from '@/utilies/cors';
import { getBuyerPurchases } from '@/utilies/action';

const BroughtArt = async() => {
        const user=await getUser()
        const getPurchase=await getBuyerPurchases(user?.email)
        
    
    return (
        <div>
            <BoughtArtworksGalleryDemo getPurchase={getPurchase}/>
        </div>
    );
};

export default BroughtArt;