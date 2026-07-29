import React from 'react';
import TransactionsPage from './TransactionsPage';
import { getPremiumSubs, getProSubs, getPurchases } from '@/utilies/action';

const Report = async() => {
    const allPurchase=await getPurchases()
    const AllPreSub=await getPremiumSubs()
    const AllProSub=await getProSubs()

    return (
        <div>
            <TransactionsPage AllPreSub={AllPreSub} allPurchase={allPurchase} AllProSub={AllProSub} />
        </div>
    );
};

export default Report;