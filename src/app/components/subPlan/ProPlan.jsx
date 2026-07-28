export default function ProPlan() {
   const plan={
        type:"Pro",
        price:"9.99"
    }
  return (
    <div className="border rounded-lg p-6 shadow-md relative transition-transform hover:scale-105 border-gray-300">
      <h3 className="text-xl font-semibold mb-2 text-center">{plan.type}</h3>
      <p className="text-3xl font-bold mb-2 text-center">${plan.price}</p>
      <p className="text-gray-600 mb-6 text-center">Up to 9 paintings</p>
      <form method="POST" action={'/api/pro-subscription'}>
        <button
          type="submit"
          className="w-full py-2 rounded-lg font-semibold transition bg-gray-100 text-purple-600 hover:bg-purple-200"
        >
          Upgrade
        </button>
      </form>
    </div>
  );
}
