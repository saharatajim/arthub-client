"use Client"

import { updateUserRole } from '@/utilies/action';
import React from 'react';

const ActionForm = ({handleRoleSelect,user}) => {

     const handleFormSubmit = async(e, user) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData.entries());
    console.log("Form entries:", entries);
    console.log("Form entries:", user);
      try {
    const result = await updateUserRole(user._id, entries.role);
   alert("Role updated:", result);
    window.location.reload();
  } catch (err) {
    console.error("Error updating role:", err.message);
  }
   
  };
    return (
        <div>
             <form onSubmit={(e) => handleFormSubmit(e, user)}>
                    <select
                      name="role"   // ✅ important for FormData
                      className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      defaultValue={user.role}
                      onChange={(e) => handleRoleSelect(user, e.target.value)}
                    >
                      <option value="Buyer">Buyer</option>
                      <option value="Artist">Artist</option>
                      <option value="Admin">Admin</option>
                    </select>

                    <button
                      type="submit"
                      className="ml-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                    >
                      Update
                    </button>
                  </form>
        </div>
    );
};

export default ActionForm;