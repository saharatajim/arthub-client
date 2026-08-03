"use client";

import { addComment } from "@/utilies/action";
import React from "react";

const CommentSection = ({artId,userMail,userId,getComm,userName}) => {
    const comments=getComm.comments

const onSubmit = async (e) => {
  e.preventDefault();

  const entries = Object.fromEntries(new FormData(e.currentTarget));
  const commentData = { ...entries, userMail, userId, userName };

  try {
  const result = await addComment(artId, commentData);
  if (result.data.insertedId) {
    alert("Comment saved successfully!");
    window.location.reload(); // ✅ reload page after alert
  }
} catch (err) {
  console.error("Error saving comment:", err.message);
}

};


  return (
    <div className="container mx-auto">
    
      {/* Add Comment Form */}
      <form onSubmit={onSubmit} className="flex gap-2 mb-4">
        <input
          name="comment"
          type="text"
          placeholder="Write a comment..."
          className="flex-1 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>
        {/* Comment List */}
      <div className="space-y-4 mt-6">
      <h2 className="text-lg font-bold">Comments</h2>
      {comments.length === 0 ? (
        <p className="text-gray-500 p-3 border m-3">No comments yet.</p>
      ) : (
        comments.map((c,index) => (
          <div key={index} className="border rounded-lg p-3 mb-5 bg-white shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-purple-600">{c.commentData.userName}</span>
              <span className="text-sm text-gray-400">
                {new Date(c.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="text-gray-700">{c.commentData.comment}</p>
          </div>
        ))
      )}
    </div>

    </div>
  );
};

export default CommentSection;
