export default function PurchaseHistoryDemo({getPurchase}) {

  const purchases =getPurchase

  return (
    <section className="w-full px-6 py-10 bg-gray-50 font-sans">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        🧾 Purchase History
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="py-3 px-4">Artwork Name</th>
              <th className="py-3 px-4">Artist</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((p) => (
              <tr
                key={p._id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">{p.title}</td>
                <td className="py-3 px-4">{p.sellerMail}</td>
                <td className="py-3 px-4 font-semibold text-green-600">
                  {p.price}
                </td>
               <td className="py-3 px-4">
  {new Date(p.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
