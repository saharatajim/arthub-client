import { getUser } from "@/utilies/cors";
import Image from "next/image";
import Link from "next/link";

export default async function MyProfile() {

const profile=await getUser()
  return (
   <div className="w-[70%] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
  {/* Header */}
  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-24 relative">
    <Image
      src={profile.image}
      alt={profile.name}
      height={34}
      width={34}
      className="w-24 h-24 rounded-full object-cover border-4 border-white absolute left-1/2 transform -translate-x-1/2 top-12"
    />
  </div>

  {/* Content */}
  <div className="pt-16 pb-6 px-6 text-center">
    <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
    <p className="text-gray-600">{profile.email}</p>

    {/* Badges */}
    <div className="mt-3 flex justify-center gap-2">
      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        {profile.role}
      </span>
      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
        {profile.subscriptionPlan} Plan
      </span>
    </div>

    {/* Stats */}
    <div className="mt-6 space-y-6 text-sm text-gray-700">
      <div>
        <p className="font-medium">Joined</p>
        <p>{new Date(profile.createdAt).toLocaleDateString("en-US", {
          year: "numeric", month: "long", day: "numeric"
        })}</p>
      </div>
      <div>
        <p className="font-medium">Last Updated</p>
        <p>{new Date(profile.updatedAt).toLocaleDateString("en-US", {
          year: "numeric", month: "long", day: "numeric"
        })}</p>
      </div>
    </div>

    {/* Actions */}
    <div className="mt-6 flex justify-center gap-4">
    <Link href={"/subscription-plan"}>
    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Upgrade Plan
      </button>
    </Link>
      
    </div>
  </div>
</div>

  );
}
