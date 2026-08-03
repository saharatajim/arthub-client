import ArtDetails from '@/app/components/dashboard/artist/ArtDetails';
import { getArtworkDetails, getBuyerPurchases } from '@/utilies/action';
import { getUser } from '@/utilies/cors';

import React from 'react';

const ArtDetailsPage = async({params}) => {
    const {artId}=await params
    const artwork=await getArtworkDetails(artId)
    const user=await getUser()
    const role=user?.role
    const userMail=user?.email
    const subPlan=user?.subscriptionPlan 
    const buyerPurchase=await getBuyerPurchases(userMail)
     const buyerTotalPurchased=buyerPurchase?.length
 


    return (
          <div>
     <ArtDetails role={role} buyerTotalPurchased={buyerTotalPurchased} artwork={artwork} artId={artId} subPlan={subPlan} />
    </div>
    );
};

export default ArtDetailsPage;