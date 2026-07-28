import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';


export async function POST() {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
    
    const priceId="price_1TyD5eF75pQIIo7L4Mkzwubi"

  
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${origin}/pricing/success-subscription?session_id={CHECKOUT_SESSION_ID}`,
   
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}