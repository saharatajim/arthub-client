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
import { BsLayoutSidebar } from "react-icons/bs";
import { authClient } from "@/lib/auth-client";

const UserDashboard = () => {
  const pathname = usePathname();   // ✅ current route path
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { 
        data: session, 
       
    } = authClient.useSession() 
  const CurrentRole = session?.user?.role;

const userMenu = [
  { icon: <FaPaintBrush />, label: "Brought Artworks", href: "/dashboard/user/bought-artworks" },
  { icon: <FaChartLine />, label: "Purchase History", href: "/dashboard/user/purchase-history" },
  { icon: <FaUserCog />, label: "Profile Management", href: "/dashboard/user/profile" },
];

const artistMenu = [
  { icon: <FaTachometerAlt />, label: "Overview", href: "/dashboard/artist" },
  { icon: <FaPaintBrush />, label: "Manage Artworks", href: "/dashboard/artist/manage-artwork" },
  { icon: <FaPlusCircle />, label: "Add Artwork", href: "/dashboard/artist/add-artwork" },
  { icon: <FaPlusCircle />, label: "Add Company", href: "/dashboard/artist/add-organization" },
  { icon: <FaChartLine />, label: "Sales History", href: "/dashboard/artist/sale-history" },
  { icon: <FaUserCog />, label: "Profile Management", href: "/dashboard/artist/profile" },
];

const adminMenu = [
  { icon: <FaTachometerAlt />, label: "Admin Dashboard", href: "/dashboard/admin" },
  { icon: <FaPaintBrush />, label: "All Artworks", href: "/dashboard/admin/allArt" },
  { icon: <FaChartLine />, label: "Transactions", href: "/dashboard/admin/transactions" },
  { icon: <FaUserCog />, label: "User Management", href: "/dashboard/admin/users" },
];

// Pick menu dynamically
let menuItems = CurrentRole === "Buyer" ? userMenu :CurrentRole === "Artist"? artistMenu:adminMenu


  return (
    <div className=" ">
      <div>
        <aside
        className={`fixed md:static top-0 left-0 min-h-screen w-64 bg-white shadow-md transform transition-transform duration-300 z-50
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        
        <div className="flex justify-between  border-b border-gray-200">
          <div className="p-6">
          <h1 className="text-2xl font-bold text-purple-700">ArtHub</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome,{session?.user?.name}</p>
          <p className="text-sm text-gray-500 mt-1">{session?.user?.role}</p>
        </div>
         <button
        className="md:hidden m-2.5 bg-pink-600 text-white p-2 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <BsLayoutSidebar/>
      </button>
        </div>
        

        <nav className="p-4 space-y-3 flex flex-col h-full justify-between">
          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 p-2 rounded-md ${
                  pathname === item.href
                    ? "bg-purple-100 text-pink-600 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>

          {/* Bottom buttons */}
          <div className="border-t border-gray-200 space-y-2 p-4">
           <Link href={"/"}>
           <button className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 text-gray-700 font-medium">
              <FaArrowLeft /> Go Back
            </button>
           </Link>
            
           
          </div>
        </nav>
      </aside>
      </div>

      {/* Hamburger button for mobile */}
      <div>
                <button
        className="md:hidden m-2.5 bg-purple-600 text-white p-2 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <BsLayoutSidebar/>
      </button>
      </div>
    </div>
  );
};

export default UserDashboard;
