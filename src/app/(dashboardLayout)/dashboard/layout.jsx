import React from 'react';
import UserDashboard from '../../components/dashboard/UserDashboard';

const layout = ({children}) => {
    return (
        <div className='flex'>
            <UserDashboard/>
            {children}
        </div>
    );
};

export default layout;