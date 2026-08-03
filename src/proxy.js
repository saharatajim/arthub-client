import { NextResponse } from 'next/server'

import { headers } from 'next/headers'
import { auth } from './lib/auth'

 
export async function proxy(request) {

    const session = await auth.api.getSession({
    headers: await headers() 
})
   if (!session) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  return NextResponse.next()
}
 

export const config = {
  matcher: [
    '/dashboard/admin/allArt',
    '/dashboard/admin/reports',
    '/dashboard/admin/transactions',
    '/dashboard/admin/users',
    '/dashboard/artist/add-artwork', 
    '/dashboard/artist/add-organization', 
    '/dashboard/artist/manage-artwork', 
    '/dashboard/artist/profile', 
    '/dashboard/artist/sale-history', 
    '/dashboard/user/bought-artworks', 
    '/dashboard/user/profile', 
    '/dashboard/user/purchase-history', 
    '/browse/:id'
  ],
};
