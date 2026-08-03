"use client"

import React, { useState } from "react";
import { addComment, deleteComment, updateComment } from "@/utilies/action";

const CommentSection = ({ artId, userMail, userId, getComm, userName, allPurchases }) => {
  const isExist = allPurchases.find(p => p.productId == artId);
  const isBuyerExist = allPurchases.find(p => p.buyerMail == userMail);
  const comments = getComm.comments;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [editText, setEditText] = useState("");

  const handleDelete = async (commentId) => {
    try {
      const result = await deleteComment(artId, commentId);
      if (result.success) {
        alert("Comment deleted successfully!");
        window.location.reload();
      }
    } catch (err) {
      console.error("Error deleting comment:", err.message);
    }
  };

  const handleEditClick = (comment) => {
    setSelectedComment(comment);
    setEditText(comment.commentData.comment);
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
  try {
    const result = await updateComment(artId, selectedComment._id, {
      commentData: {
        ...selectedComment.commentData,
        comment: editText               
      }
    });
    if (result.success) {
      alert("Comment updated successfully!");
      window.location.reload();
    }
  } catch (err) {
    console.error("Error updating comment:", err.message);
  }
};


  const onSubmit = async (e) => {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(e.currentTarget));
    const commentData = { ...entries, userMail, userId, userName };

    try {
      const result = await addComment(artId, commentData);
      if (result.data.insertedId) {
        alert("Comment saved successfully!");
        window.location.reload();
      }
    } catch (err) {
      console.error("Error saving comment:", err.message);
    }
  };

  return (
    <div className="container mx-auto">
      {/* Add Comment Form */}
      {isExist && (
        <form onSubmit={onSubmit} className="flex gap-2 mb-4">
          <input
            name="comment"
            type="text"
            placeholder="Write a comment..."
            className="flex-1 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Add
          </button>
        </form>
      )}

      {/* Comment List */}
      <div className="space-y-4 mt-6">
        <h2 className="text-lg font-bold">Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500 p-3 border m-3">No comments yet.</p>
        ) : (
          comments.map((c, index) => (
            <div key={index} className="border rounded-lg p-3 mb-5 bg-white shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-purple-600">{c.commentData.userName}</span>
                <span className="text-sm text-gray-400">
                  {new Date(c.createdAt).toISOString()}
                </span>
              </div>
              <p className="text-gray-700">{c.commentData.comment}</p>

              {isBuyerExist && (
                <div className="flex gap-3 mt-2">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleEditClick(c)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(c._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* ✅ Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Edit Comment</h2>
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Confirm Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
