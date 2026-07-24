"use client";
import React, { useState } from "react";

const SalesHistory = () => {
  // Fake sales data
  const [sales, setSales] = useState([
    {
      id: 1,
      title: "Sunset Glow",
      buyer: "Alice Johnson",
      date: "2026-07-20",
      amount: 200,
    },
    {
      id: 2,
      title: "Ocean Breeze",
      buyer: "David Smith",
      date: "2026-07-21",
      amount: 350,
    },
    {
      id: 3,
      title: "Golden Horizon",
      buyer: "Sophia Lee",
      date: "2026-07-22",
      amount: 650,
    },
    {
      id: 4,
      title: "Mystic Forest",
      buyer: "Michael Brown",
      date: "2026-07-23",
      amount: 180,
    },
  ]);

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
            {sales.map((sale) => (
              <tr key={sale.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{sale.title}</td>
                <td className="p-3">{sale.buyer}</td>
                <td className="p-3">{sale.date}</td>
                <td className="p-3">${sale.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesHistory;
