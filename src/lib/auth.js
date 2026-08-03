const dns = require("node:dns");  
dns.setServers(["8.8.8.8", "8.8.4.4"]); 

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URL);
// await client.connect(); // ✅ connect before using
const db = client.db("arthub");

export const auth = betterAuth({
   baseURL: process.env.BETTER_AUTH_URL,
  database: mongodbAdapter(db, 
    {client}),
   emailAndPassword: { 
    enabled: true, 
  }, 
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
 user: {
  additionalFields: {
    role: {
      type: "string",
      required: true,
      defaultValue: "Buyer"
    },
    subscriptionPlan: {
      type: "string",
       required: true,
      defaultValue: "Free"
    }
  }
},

 session:{
        cookieCache:{
            enabled:true,
            strategy:"jwt",
            maxAge:7*24*60*60
        }
    },
      plugins: [
        jwt(), 
    ]

});