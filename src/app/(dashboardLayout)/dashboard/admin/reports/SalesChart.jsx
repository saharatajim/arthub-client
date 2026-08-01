"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function SalesChart({ ChartData }) {
  const formatted = ChartData.map(d => ({
    month: `${d._id.month}/${d._id.year}`,
    revenue: d.monthlyRevenue,
    sold: d.artworksSold
  }));

  return (
    <div className="bg-white shadow rounded p-6 w-full">
      <h2 className="text-lg font-bold mb-4">Sales Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formatted}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" name="Revenue ($)" />
          <Bar dataKey="sold" fill="#82ca9d" name="Artworks Sold" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
