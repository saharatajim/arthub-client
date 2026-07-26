"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function SigninPage() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData.entries());

   

    try {
      const { data, error } = await authClient.signIn.email({
        email: entries.email,
        password: entries.password,
      });

      if (error) {
        
        alert("Signin failed: " + error.message);
        return;
      }

      alert("Welcome back!");
       router.push("/")
    } catch (err) {
    
      alert("Something went wrong during signin.");
    }
  };

  const handleGoogleSignin = async () => {
    console.log("c");
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
      });

      if (error) {

        alert("Google Signin failed: " + error.message);
        return;
      }

      alert("Signed in with Google!");
    } catch (err) {
  
      alert("Something went wrong during Google signin.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-purple-600">ArtHub</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Google Signin */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignin}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              height={5}
              width={5}
              className="w-5 h-5"
            />
            <span>Sign in with Google</span>
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="text-purple-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
