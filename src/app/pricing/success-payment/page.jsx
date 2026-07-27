import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

const session = await stripe.checkout.sessions.retrieve(session_id, {
  expand: ['line_items', 'payment_intent']
});
const { status } = session;

const customerEmail = session.customer_details?.email;

const paymentData = {
  trxId:session?.payment_intent?.id,
  price: session?.metadata?.price,
  productId: session?.metadata?.productId,
  title: session?.metadata?.title,
  sellerMail: session?.metadata?.sellerMail,
  buyerMail: customerEmail,
  createdAt: session?.metadata?.createdAt,

};

console.log("✅ Payment Metadata:", paymentData);
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/artwork/purchases`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentData),
    });

    const data = await res.json();
    console.log("✅ Purchase Response:", data);

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    return (
      <section
        id="success"
        style={{
          background: 'linear-gradient(135deg, #a855f7, #ec4899)',
          color: 'white',
          padding: '2rem',
          borderRadius: '12px',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '600px',
          margin: '2rem auto',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎉 Thank You!</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          We appreciate your business! A confirmation email will be sent to{' '}
          <strong>{customerEmail}</strong>. If you have any questions, please
          email{' '}
          <a
            href="mailto:orders@example.com"
            style={{ color: '#fbcfe8', textDecoration: 'underline' }}
          >
            orders@example.com
          </a>.
        </p>

        {/* Go to Home button */}
        <Link
          href="/"
          style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#f472b6',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease'
          }}
        >
          ⬅ Go to Home
        </Link>
      </section>
    )
  }
}
