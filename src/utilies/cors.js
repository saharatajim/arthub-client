
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";

export const getUser=async()=>{

    const session = await auth.api.getSession({
    headers: await headers() 
   
})
return session?.user
}

export const getUserClient=async()=>{
     const { 
        data: session, 
    } = authClient.useSession() 
    return session?.user
}