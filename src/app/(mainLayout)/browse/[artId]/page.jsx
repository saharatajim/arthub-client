import CommentSection from '@/app/components/CommentSection';
import ArtDetails from '@/app/components/dashboard/artist/ArtDetails';
import { getArtworkDetails, getBuyerPurchases, getComments } from '@/utilies/action';
import { getUser } from '@/utilies/cors';

import React from 'react';

const ArtDetailsPage = async({params}) => {
    const {artId}=await params
    const artwork=await getArtworkDetails(artId)
    const user=await getUser()
    const role=user?.role
    const userMail=user?.email
    const userName=user?.name
    const userId=user?.id
    const subPlan=user?.subscriptionPlan 
    const buyerPurchase=await getBuyerPurchases(userMail)
     const buyerTotalPurchased=buyerPurchase?.length
 
const getComm=await getComments(artId)

    return (
          <div>
     <ArtDetails role={role} buyerTotalPurchased={buyerTotalPurchased} artwork={artwork} artId={artId} subPlan={subPlan} />
     <CommentSection getComm={getComm} artId={artId} userMail={userMail} userId={userId} userName={userName}/>
    </div>
    );
};

export default ArtDetailsPage;