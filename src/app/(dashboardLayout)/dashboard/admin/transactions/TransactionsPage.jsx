import React from "react";

const TransactionsPage = ({ allPurchase, AllPreSub, AllProSub }) => {
  return (
    <div className="container mx-auto py-10 px-2 md:px-4 space-y-10">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
        All Transactions
      </h2>

      {/* Premium Subscription Table */}
      <div className="overflow-x-auto">
        <h3 className="text-base md:text-lg font-semibold mb-4 text-purple-600">
          Premium Subscription Transactions
        </h3>
        {AllPreSub.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6">
            <p className="text-purple-600 font-semibold">No Premium Subscriptions Found</p>
          </div>
        ) : (
          <table className="min-w-full border border-gray-200 rounded-lg shadow-sm text-xs md:text-sm lg:text-base">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Transaction ID</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Type</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Email</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Amount</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {AllPreSub.map((purchase, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-2 md:py-3 px-2 md:px-4">{purchase.trxId}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4">Subscription</td>
                  <td className="py-2 md:py-3 px-2 md:px-4">{purchase.customerEmail}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4">${purchase.price}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4">
                    {new Date(purchase.createdAt).toLocaleDateString("en-US", {
                      month: "numeric",
                      day: "numeric",
                      year: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pro Subscription Table */}
      <div className="overflow-x-auto">
        <h3 className="text-base md:text-lg font-semibold mb-4 text-purple-600">
          Pro Subscription Transactions
        </h3>
        {AllProSub.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6">
            <p className="text-purple-600 font-semibold">No Pro Subscriptions Found</p>
          </div>
        ) : (
          <table className="min-w-full border border-gray-200 rounded-lg shadow-sm text-xs md:text-sm lg:text-base">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Transaction ID</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Type</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Email</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Amount</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {AllProSub.map((purchase, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-2 md:py-3 px-2 md:px-4">{purchase.trxId}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4">Subscription</td>
                  <td className="py-2 md:py-3 px-2 md:px-4">{purchase.customerEmail}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4">${purchase.price}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4">
                    {new Date(purchase.createdAt).toLocaleDateString("en-US", {
                      month: "numeric",
                      day: "numeric",
                      year: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Payment Table */}
      <div className="overflow-x-auto">
        <h3 className="text-base md:text-lg font-semibold mb-4 text-green-600">
          Payment Transactions
        </h3>
        {allPurchase.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6">
            <p className="text-green-600 font-semibold">No Payments Found</p>
          </div>
        ) : (
          <table className="min-w-full border border-gray-200 rounded-lg shadow-sm text-xs md:text-sm lg:text-base">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Transaction ID</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Type</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Email</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Amount</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {allPurchase.map((purchase, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-2 md:py-3 px-2 md:px-4">{purchase.trxId}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4">Payment</td>
                  <td className="py-2 md:py-3 px-2 md:px-4">{purchase.buyerMail}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4">${purchase.price}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4">
                    {new Date(purchase.createdAt).toLocaleDateString("en-US", {
                      month: "numeric",
                      day: "numeric",
                      year: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TransactionsPage;
