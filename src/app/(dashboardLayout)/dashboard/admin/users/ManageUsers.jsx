"use client";

import { useState } from "react";
import ActionForm from "./ActionForm";

export default function ManageUsers({ alluser }) {
  const [role, setRole] = useState(null);

  // Handle role select
  const handleRoleSelect = (newRole) => {
    setRole(newRole);
  };

  // Handle form submit
 

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Users</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {alluser?.map((user, index) => (
              <tr
                key={user._id || index}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4 capitalize">{user.role}</td>
                <td className="py-3 px-4 text-center">
                 <ActionForm handleRoleSelect={handleRoleSelect} user={user}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
