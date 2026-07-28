import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';


export async function POST() {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')

    const priceId="price_1TyK72F75pQIIo7LAeTBPWep"
   
  
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
         
          price: priceId,
          quantity: 1,
        },
      ],
     
      mode: 'subscription',
      success_url: `${origin}/pricing/success-pro-subscription?session_id={CHECKOUT_SESSION_ID}`,
   
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}