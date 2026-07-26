const dns = require("node:dns");  
dns.setServers(["8.8.8.8", "8.8.4.4"]); 

import React from 'react';
import SigninPage from './SigninPage';

const SignInPage = () => {
    return (
        <div>
            <SigninPage/>
        </div>
    );
};

export default SignInPage;