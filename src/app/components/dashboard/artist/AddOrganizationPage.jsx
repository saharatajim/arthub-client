"use client";
import Image from "next/image";
import { useState } from "react";

export default function AddOrganizationPage({user}) {
  const [logoPreview, setLogoPreview] = useState(null);
  const [myOrg, setMyorg] = useState(null);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) setLogoPreview(URL.createObjectURL(file));
  };

  // Handle form submit (demo only)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData.entries());

    const newOrganization = {
      name: entries.name,
      established: entries.established,
      location: entries.location,
      mission: entries.mission,
      vision: entries.vision,
      email: entries.email,
      phone: entries.phone,
      logo: logoPreview,
    };

    console.log(newOrganization);
    alert("Organization added successfully!");
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

          {/* Established Year & Location side by side on larger screens */}
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

          {/* Mission */}
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

          {/* Contact Info side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Organization email"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          {/* Logo Upload */}
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

          {/* Submit */}
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
