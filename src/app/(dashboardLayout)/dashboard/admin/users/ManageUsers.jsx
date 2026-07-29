"use client";

import { useState } from "react";
import ActionForm from "./ActionForm";

export default function ManageUsers({ alluser }) {
  const [role, setRole] = useState(null);

  // Handle role select
  const handleRoleSelect = (newRole) => {
    setRole(newRole);
  
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Users</h2>

      {(!alluser || alluser.length === 0) ? (
        // Empty State UI
        <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-lg shadow-md p-10">
          <svg
            className="w-16 h-16 text-purple-400 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
          <h2 className="text-xl font-semibold text-purple-600">
            No Users Found
          </h2>
          <p className="text-gray-600 mt-2">
            There are no users available right now.
          </p>
        </div>
      ) : (
        // Table UI
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
              {alluser.map((user, index) => (
                <tr
                  key={user._id || index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4 capitalize">{user.role}</td>
                  <td className="py-3 px-4 text-center">
                    <ActionForm handleRoleSelect={handleRoleSelect} user={user} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
