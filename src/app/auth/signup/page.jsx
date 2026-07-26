const dns = require("node:dns");  
dns.setServers(["8.8.8.8", "8.8.4.4"]); 

import React from 'react';
import SignupPage from './SignupPage';

const SignUpPage = () => {
    return (
        <div>
            <SignupPage/>
        </div>
    );
};

export default SignUpPage;