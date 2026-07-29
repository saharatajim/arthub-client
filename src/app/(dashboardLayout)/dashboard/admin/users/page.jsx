"use client";
import { useState } from "react";

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ayesha Rahman", email: "ayesha@example.com", role: "user" },
    { id: 2, name: "Rafiul Karim", email: "rafiul@example.com", role: "artist" },
    { id: 3, name: "Sadia Akter", email: "sadia@example.com", role: "admin" },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleRoleChange = (user, role) => {
    setSelectedUser(user);
    setNewRole(role);
    setShowModal(true);
  };

  const confirmChange = () => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === selectedUser.id ? { ...u, role: newRole } : u
      )
    );
    console.log(`Role changed: ${selectedUser.email} → ${newRole}`);
    // এখানে backend এ API call করতে পারো role update করার জন্য
    setShowModal(false);
  };

  const cancelChange = () => {
    setShowModal(false);
    setSelectedUser(null);
    setNewRole("");
  };

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
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4 capitalize">{user.role}</td>
                <td className="py-3 px-4 text-center">
                  <select
                    className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={user.role}
                    onChange={(e) => handleRoleChange(user, e.target.value)}
                  >
                    <option value="user">User</option>
                    <option value="artist">Artist</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Confirm Role Change
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to change{" "}
              <span className="font-semibold">{selectedUser?.email}</span>'s role
              to{" "}
              <span className="text-purple-600 font-semibold">{newRole}</span>?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmChange}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Confirm
              </button>
              <button
                onClick={cancelChange}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
