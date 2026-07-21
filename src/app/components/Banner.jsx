
"use client";
import Link from "next/link";
import Image from "next/image";
import banner from "./assets/banner-01.png"
import 'animate.css';


export default function Banner() {
  return (
    <section className="container mx-auto bg-white py-20">
 
      <div className="px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-black">Discover & Buy </span><br />
            <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Original Art
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Explore stunning artworks from talented artists around the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Link
              href="/browse"
              className="inline-block bg-purple-600 text-white font-semibold p-5 rounded shadow hover:bg-purple-700 transition"
            >
              Browse Artworks
            </Link>
            <Link
              href="/artist/signup"
              className="inline-block border border-purple-600 text-purple-600 p-5 rounded font-semibold hover:bg-purple-600 hover:text-white transition"
            >
              Become an Artist
            </Link>
          </div>

     
        </div>

        {/* Right Side Illustration */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
          loading="eager"
            src={banner}// ✅ place your image in public folder
            alt="Artist painting illustration"
            width={600}
            height={400}
            className="rounded-lg animate__animated animate__pulse animate__infinite animate__slow"
          />
        </div>
      </div>
    </section>
  );
}
