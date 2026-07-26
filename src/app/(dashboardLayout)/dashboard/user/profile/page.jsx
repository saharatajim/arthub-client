"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

export default function ProfileManagement() {
  const { data: session, isPending } = authClient.useSession();

  // Common state
  const [name, setName] = useState("");
  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  // Feedback + loading states
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileMsg, setProfileMsg] = useState({ text: "", isError: false });
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState({ text: "", isError: false });

  // Password states
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [revokeOtherSessions, setRevokeOtherSessions] = useState(true);

  // Populate user data
  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setPreview(session.user.image || null);
    }
  }, [session]);

  if (isPending) return <div className="p-6 text-gray-600">Loading profile details...</div>;
  if (!session) return <div className="p-6 text-gray-600">Please log in to view profile management.</div>;

  // --- Helpers ---
  const uploadImage = async () => {
    if (!imageFile) return preview;
    const uploadData = new FormData();
    uploadData.append("image", imageFile);
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        { method: "POST", body: uploadData }
      );
      const result = await res.json();
      return result?.data?.url || preview;
    } catch (err) {
      console.error("Upload failed:", err);
      return preview;
    }
  };

  // --- Update Profile ---
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setProfileLoading(true);
    setProfileMsg({ text: "", isError: false });

    const imageUrl = await uploadImage();

    try {
      const { error } = await authClient.updateUser({ name, image: imageUrl });
      setProfileMsg(
        error
          ? { text: error.message || "Failed to update profile", isError: true }
          : { text: "Profile updated successfully!", isError: false }
      );
    } catch {
      setProfileMsg({ text: "Unexpected error occurred.", isError: true });
    } finally {
      setProfileLoading(false);
    }
  };

  // --- Change Password ---
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPasswordMsg({ text: "", isError: false });

    if (newPassword !== confirmPassword) {
      setPasswordMsg({ text: "New passwords do not match", isError: true });
      return;
    }

    setPasswordLoading(true);
    try {
      const { error } = await authClient.changePassword({
        currentPassword,
        newPassword,
        revokeOtherSessions,
      });
      setPasswordMsg(
        error
          ? { text: error.message || "Failed to change password", isError: true }
          : { text: "Password changed successfully!", isError: false }
      );
      if (!error) {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch {
      setPasswordMsg({ text: "Unexpected error occurred.", isError: true });
    } finally {
      setPasswordLoading(false);
    }
  };

  // --- UI ---
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h2 className="text-2xl font-bold text-purple-700 text-center">Profile Management</h2>

      {/* Responsive grid: Profile + Password side by side on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Edit Profile */}
        <section className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email (Read-only)</label>
              <input
                type="email"
                value={session.user.email}
                disabled
                className="w-full border rounded px-3 py-2 bg-gray-100 text-gray-600 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Profile Image Upload */}
            <div>
              <label className="block text-sm font-medium mb-2">Profile Image</label>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {preview ? (
                  <Image src={preview} alt="Profile Preview" width={80} height={80} className="rounded-full border" />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} className="text-sm" />
              </div>
            </div>

            <button type="submit" disabled={profileLoading} className="w-full bg-purple-600 text-white px-4 py-2 rounded">
              {profileLoading ? "Saving..." : "Update Profile"}
            </button>

            {profileMsg.text && (
              <p className={`mt-2 text-sm ${profileMsg.isError ? "text-red-600" : "text-green-600"}`}>{profileMsg.text}</p>
            )}
          </form>
        </section>

        {/* Change Password */}
        <section className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
          <form onSubmit={handleChangePassword} className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            />

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={revokeOtherSessions} onChange={(e) => setRevokeOtherSessions(e.target.checked)} />
              Log out of other sessions/devices
            </label>

            <button type="submit" disabled={passwordLoading} className="w-full bg-purple-600 text-white px-4 py-2 rounded">
              {passwordLoading ? "Updating..." : "Change Password"}
            </button>

            {passwordMsg.text && (
              <p className={`mt-2 text-sm ${passwordMsg.isError ? "text-red-600" : "text-green-600"}`}>{passwordMsg.text}</p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
