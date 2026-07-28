"use client";
import React, { useState } from "react";

const SalesHistory = ({getPurchase}) => {
  // Fake sales data
  const sales=getPurchase

  return (
  <div className="p-6 flex-1 bg-gray-100 min-h-screen">
  <h2 className="text-2xl font-bold mb-4">Sales History</h2>
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <table className="w-full border-collapse">
      <thead className="bg-purple-100">
        <tr>
          <th className="text-left p-3">Artwork Title</th>
          <th className="text-left p-3">Buyer Name</th>
          <th className="text-left p-3">Purchase Date</th>
          <th className="text-left p-3">Amount</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((sale, index) => (
          <tr key={index} className="border-b hover:bg-gray-50">
            <td className="p-3">{sale.title}</td>
            <td className="p-3">{sale.buyerMail}</td>
            <td className="p-3">
              {new Date(sale.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </td>
            <td className="p-3">${sale.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default SalesHistory;
