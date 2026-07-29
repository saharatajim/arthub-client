import { auth } from '@/lib/auth'
import { stripe } from '@/lib/stripe'
import { premiumSub } from '@/utilies/action'

import { headers } from 'next/headers'

import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  const userSession = await auth.api.getSession({
    headers: await headers(),
  });

  const user = userSession?.user;


  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const session = await stripe.checkout.sessions.retrieve(session_id, {
  expand: ['line_items', 'payment_intent']
});
const { status } = session;

const customerEmail = session.customer_details?.email;
const subData = {
     trxId:session?.subscription,
       session_id,
       user,
       customerEmail,
       customerName:session.customer_details?.name,
       price: session.amount_total/100,
       title: "Premium",
       createdAt: new Date().toISOString(),

};

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {

   const result= await premiumSub(subData)

   console.log(result)
   console.log("ses",session
);
    return (
      <section
        id="success"
        className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6"
      >
        {/* Icon */}
        <div className="bg-green-100 p-6 rounded-full">
          <svg
            className="w-12 h-12 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-600">
          Subscription Activated!
        </h2>

        {/* Message */}
        <p className="text-gray-600 max-w-md">
          Thank you for subscribing to our monthly plan. A confirmation email
          has been sent to <span className="font-semibold">{customerEmail}</span>.
          Your subscription is now active and you can enjoy all premium features.
        </p>

        {/* Button */}
        <Link
          href={"/"}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Go to Home
        </Link>
      </section>
    )
  }
}
