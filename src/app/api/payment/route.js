import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';
import { getUser } from '@/utilies/cors';



export async function POST(request) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
    const formData=await request.formData()

    const user=getUser()
       const buyerMail=user?.email
     const productId = formData.get("productId");
     const title = formData.get("title");
     const price = formData.get("price");
    

     const sellerMail = formData.get("sellerMail");

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
               price_data: {
                currency: 'usd',
                product_data: {
                    name: title
                },
                unit_amount: Number(price) * 100
            },
          
          quantity: 1,
        },
      ],
         metadata : {
           sellerMail,
           buyerMail,
            price,
           title,
            productId, 
            createdAt: new Date().toISOString(),
    
      },
      mode: 'payment',

      success_url: `${origin}/pricing/success-payment?session_id={CHECKOUT_SESSION_ID}`,
     
      
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}