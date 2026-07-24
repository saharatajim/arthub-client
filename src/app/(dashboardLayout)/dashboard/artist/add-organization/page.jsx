import AddOrganizationPage from '@/app/components/dashboard/artist/AddOrganizationPage';
import { getUser } from '@/utilies/cors';
import React from 'react';


const AddOrganization = async() => {
    const user=await getUser()
  
    return (
        <div className='container mx-auto'>
            <AddOrganizationPage user={user}/>
        </div>
    );
};

export default AddOrganization;