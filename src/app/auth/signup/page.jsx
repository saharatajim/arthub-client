"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function SignupPage() {
      const [preview, setPreview] = useState(null);
      
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const entries = Object.fromEntries(formData.entries());

  
 if (entries.password !== entries.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  // Upload image if provided
  const imageFile = formData.get("image");
  let imageUrl = null;
  if (imageFile && imageFile.size > 0) {
    const uploadData = new FormData();
    uploadData.append("image", imageFile);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: uploadData,
        }
      );
      const result = await res.json();
      imageUrl = result?.data?.url;
    } catch (err) {
      console.error("Upload failed:", err);
    }
  }

  try {
    const { data, error } = await authClient.signUp.email({
      email: entries.email,
      password: entries.password,
      name: entries.name,
      role: entries.role,
      image: imageUrl, // ✅ hosted image URL
    });

    if (error) {
  
      alert("Signup failed: " + error.message);
      return;
    }

  
    alert("Signup successful!");
  } catch (err) {

    alert("Something went wrong during signup.");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-purple-600">ArtHub</h1>
          <p className="text-gray-600">Create your account</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
                {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Choose Role</label>
            <select
              name="role"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-700"
              required
            >
              <option value="Buyer">Buyer</option>
              <option value="Artist">Artist</option>
            </select>
          </div>
            {/* Profile Picture Upload */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Profile Picture
  </label>
  <div className="flex items-center justify-center w-full">
    <label
      className="flex flex-col items-center justify-center w-full h-40 p-4 border-2 border-dashed rounded-lg cursor-pointer 
      bg-gray-50 hover:bg-purple-50 border-purple-400 overflow-hidden"
    >
      {preview ? (
        <Image
          src={preview}
          alt="Preview"
          height={24}
          width={24}
          className="w-24 h-24 object-cover  border"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-600">
          <svg
            className="w-8 h-8 text-purple-600 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4m0 0l-4 4m4-4l4 4M17 8v12m0 0l-4-4m4 4l4-4"
            />
          </svg>
          <p className="text-sm">
            <span className="font-semibold">Click to upload</span> or drag & drop
          </p>
          <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
        </div>
      )}
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </label>
  </div>
</div>



          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-purple-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
