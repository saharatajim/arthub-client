"use client";
import Image from "next/image";

export default function ArtistOverviewPage({user}) {

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Artist Header */}
      <section className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <Image
          src={user?.image}
          alt="Artist Profile"
          width={120}
          height={120}
          className="rounded-full border object-cover"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-purple-700">{user?.name}</h1>
          <p className="text-gray-600">Role: Artist</p>
          <p className="mt-2 text-sm text-gray-500">
            Email: {user?.email}
          </p>
          <p className="mt-2 text-sm text-gray-500">
  Joined: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
</p>

        </div>
      </section>

     
    </div>
  );
}
