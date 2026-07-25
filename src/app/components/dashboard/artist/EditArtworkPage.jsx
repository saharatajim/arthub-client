"use client";
import {  getArtworkDetails, updateArtwork } from "@/utilies/action";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EditArtworkPage({art}) {
  const [preview, setPreview] = useState(null);
  const [details, setDetails] = useState(null);

 useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getArtworkDetails(art._id);
        setDetails(data);
        setPreview(data?.image || null);
      } catch (err) {
        console.error("Error fetching artwork details:", err);
      }
    };
    fetchDetails();
  }, [art._id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };
 

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const entries = Object.fromEntries(formData.entries());
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

  const modifiedArtwork = {
    title: entries.title,
    description: entries.description,
    price: entries.price,
    category: entries.category,
    image: imageUrl || details?.image, // keep old image if none uploaded
  };

  try {
    const updated = await updateArtwork(art._id, modifiedArtwork);

    alert("Artwork updated successfully!");
    window.location.reload(); // refresh page to show changes
  } catch (err) {
    console.error("Error updating artwork:", err);
    alert("Update failed");
  }

  e.target.reset();
  setPreview(null);
};




  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Edit Artwork
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={details?.title}
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={details?.description}
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Price & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                defaultValue={details?.price}
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Category</label>
              <select
                name="category"
                defaultValue={details?.category}
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-600"
                required
              >
                <option value="">Select category</option>
                <option value="Painting">Painting</option>
                <option value="Digital">Digital</option>
                <option value="Photography">Photography</option>
                <option value="Sculpture">Sculpture</option>
              </select>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Artwork Image</label>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {details?.image ? (
                <Image
                  src={details?.image}
                  alt="Preview"
                  width={100}
                  height={100}
                  className="rounded border object-cover"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
                  No Image
                </div>
              )}
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="text-sm"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Update Artwork
          </button>
        </form>
      </div>
    </div>
  );
}
