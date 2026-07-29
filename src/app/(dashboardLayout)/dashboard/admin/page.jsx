import { getUser } from "@/utilies/cors";
import Image from "next/image";
import React from "react";

const AdminPage = async() => {

 const admin=await getUser()
 console.log(admin);
  return (
   <div className=" w-full">
     <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        {/* Profile Image */}
        <Image
        height={24}
        width={24}
          src={admin.image}
          alt="Admin Avatar"
          className="w-24 h-24 object-contain rounded-full mx-auto mb-4 border-4 border-purple-500"
        />

        {/* Name & Role */}
        <h2 className="text-2xl font-bold text-gray-800">{admin.name}</h2>
        <p className="text-purple-600 font-semibold">Role:{admin.role}</p>

        {/* Email */}
        

        {/* Dates */}
        <div className="mt-4 text-sm text-gray-500 space-y-1">
          <p>Created At: {new Date(admin.createdAt).toLocaleString()}</p>
          <p>Updated At: {new Date(admin.updatedAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default AdminPage;
