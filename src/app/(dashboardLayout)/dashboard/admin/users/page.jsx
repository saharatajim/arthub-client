import React from 'react';
import ManageUsers from './ManageUsers';
import { getUsersData } from '@/utilies/action';

const AllUsers = async() => {
    const alluser=await getUsersData()
    return (
        <div>
            <ManageUsers alluser={alluser}/>
        </div>
    );
};

export default AllUsers;