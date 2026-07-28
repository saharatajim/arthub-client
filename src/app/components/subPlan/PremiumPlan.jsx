export default function PremiumPlan() {
  return (
    <div className="border rounded-lg p-6 shadow-md relative transition-transform hover:scale-105 border-purple-600">
      <span className="absolute top-0 left-0 bg-purple-600 text-white px-3 py-1 rounded-br-lg text-xs font-semibold">
        MOST POPULAR
      </span>
      <h3 className="text-xl font-semibold mb-2 text-center">Premium</h3>
      <p className="text-3xl font-bold mb-2 text-center">$19.99</p>
      <p className="text-gray-600 mb-6 text-center">Unlimited</p>
      <form method="POST" action={'/api/premium-subscription'}>
        <button
          type="submit"
          className="w-full p-2 rounded-lg font-semibold transition bg-purple-600 text-white hover:bg-purple-700"
        >
         Upgrade to premium
        </button>
      </form>
    </div>
  );
}
