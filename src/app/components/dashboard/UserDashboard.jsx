"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";   // ✅ usePathname import
import React, { useState } from "react";
import {
  FaTachometerAlt, 
  FaPaintBrush,
  FaPlusCircle,
  FaEdit,
  FaChartLine,
  FaUserCog,
  FaSignOutAlt,
  FaArrowLeft
} from "react-icons/fa";

const UserDashboard = () => {
  const pathname = usePathname();   // ✅ current route path
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const artistMenu = [
    { icon: <FaTachometerAlt />, label: "Overview", href: "/dashboard" },
    { icon: <FaPaintBrush />, label: "Manage Artworks", href: "/dashboard/artist/manage-artwork" },
    { icon: <FaPlusCircle />, label: "Add Artwork", href: "/dashboard/artist/add-artwork" },
    { icon: <FaEdit />, label: "Edit Artwork", href: "/dashboard/artist/edit-artwork" },
    { icon: <FaChartLine />, label: "Sales History", href: "/dashboard/artist/sale-history" },
    { icon: <FaUserCog />, label: "Profile Management", href: "/dashboard/artist/profile" },
  ];

  return (
    <div className="">
      <aside
        className={`fixed md:static top-0 left-0 min-h-screen w-64 bg-white shadow-md transform transition-transform duration-300 z-50
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-purple-700">ArtHub</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome,</p>
        </div>

        <nav className="p-4 space-y-3 flex flex-col h-full justify-between">
          <div className="space-y-3">
            {artistMenu.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 p-2 rounded-md ${
                  pathname === item.href
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>

          {/* Bottom buttons */}
          <div className="border-t border-gray-200 space-y-2 p-4">
            <button className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 text-red-600 font-medium">
              <FaSignOutAlt /> Logout
            </button>
            <button className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium">
              <FaArrowLeft /> Go Back
            </button>
          </div>
        </nav>
      </aside>

      {/* Hamburger button for mobile */}
      <button
        className="md:hidden bg-purple-600 text-white p-2 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>
    </div>
  );
};

export default UserDashboard;
