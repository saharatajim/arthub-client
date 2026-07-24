"use client";
import { addOrganization, getArtistOrganization, updateOrganization } from "@/utilies/action";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AddOrganizationPage({ user }) {
  const [logoPreview, setLogoPreview] = useState(null);
  const [myOrg, setMyorg] = useState(null);


  const fetchOrg = async () => { 
  if (!user?.email) return;
  const org = await getArtistOrganization(user.email);
  
  setMyorg(Array.isArray(org) ? org[0] : org);
};

  useEffect(() => {
    fetchOrg();
  }, [user]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) setLogoPreview(URL.createObjectURL(file));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const entries = Object.fromEntries(formData.entries());

  const newOrganization = {
    name: entries.name,
    established: entries.established,
    location: entries.location,
    mission: entries.mission,
    vision: entries.vision,
    logo: logoPreview,
    artistMail: user?.email,
    artistUniqueId: user?.id,
  };

  try {
    if (!myOrg) {
      // Insert new organization
      const resData = await addOrganization(newOrganization);
      if (resData.insertedId) {
        alert("Organization added successfully!");
        await fetchOrg();
      }
    } else {
    
      const resData = await updateOrganization(user?.email, newOrganization);
      if (resData.modifiedCount > 0) {
        alert("Organization updated successfully!");
        await fetchOrg();
      } else {
        alert("No changes made.");
      }
    }
  } catch (err) {
    console.error("Error saving organization:", err);
    alert("Failed to save organization.");
  }

  e.target.reset();
  setLogoPreview(null);
};


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Add Organization
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Organization Name */}
          <div>
            <label className="block text-sm font-medium">Organization Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter organization name"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Established Year</label>
              <input
                type="number"
                name="established"
                placeholder="e.g. 2010"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                placeholder="City, Country"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

    
          <div>
            <label className="block text-sm font-medium">Mission</label>
            <textarea
              name="mission"
              placeholder="Write mission statement"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Vision */}
          <div>
            <label className="block text-sm font-medium">Vision</label>
            <textarea
              name="vision"
              placeholder="Write vision statement"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-600"
            />
          </div>

       
          <div>
            <label className="block text-sm font-medium mb-2">Organization Logo</label>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {logoPreview ? (
                <Image
                  src={logoPreview}
                  alt="Logo Preview"
                  width={100}
                  height={100}
                  className="rounded border object-cover"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
                  No Logo
                </div>
              )}
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleLogoChange}
                className="text-sm"
              />
            </div>
          </div>

     
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Add Organization
          </button>
        </form>
      </div>
    </div>
  );
}
