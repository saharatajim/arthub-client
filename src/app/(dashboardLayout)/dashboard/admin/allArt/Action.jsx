"use client"
import { deleteArt } from '@/utilies/action';
import React from 'react';

const Action = ({id}) => {
    const handleDelete = async () => {
      try {
        await deleteArt(id);
        alert("Deleted successfully");
        window.location.reload(); // 🔄 reloads the page
      } catch (err) {
        console.error("Error deleting artwork:", err);
        alert("Failed to delete");
      }
    };
    return (
        <div>
            <button  onClick={handleDelete} className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-red-600 transition">
                    Delete
                  </button>
        </div>
    );
};

export default Action;