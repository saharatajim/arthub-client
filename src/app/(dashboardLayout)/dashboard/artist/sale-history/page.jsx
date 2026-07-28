import React from 'react';
import SalesHistory from './SalesHistory';
import { getUser } from '@/utilies/cors';
import { getSellerPurchases } from '@/utilies/action';

const SaleHistoryPage = async() => {
    const user=await getUser()
     const getPurchase=await getSellerPurchases(user?.email)
    return (
        
            <SalesHistory getPurchase={getPurchase}/>
        
    );
};

export default SaleHistoryPage;