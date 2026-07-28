import { getUser } from '@/utilies/cors';
import React from 'react';
import PurchaseHistoryDemo from './PurchaseHistoryDemo';
import {  getArtworkDetails, getBuyerPurchases } from '@/utilies/action';

const Purchase = async() => {
    const user=await getUser()
    const getPurchase=await getBuyerPurchases(user?.email)
   
    

  
   
    
   
    return (
        <div>
            <PurchaseHistoryDemo getPurchase={getPurchase}/>
        </div>
    );
};

export default Purchase;