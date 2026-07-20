// components/Footer.js
"use client";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-gray-900 text-gray-300 py-5 ">
      <div className="px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">ArtHub</h2>
          <p className="text-sm">
            Discover, collect, and share original art from talented artists worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-purple-400">About</Link></li>
            <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-purple-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-purple-400"><FaFacebook size={20} /></Link>
            <Link href="#" className="hover:text-purple-400"><FaTwitter size={20} /></Link>
            <Link href="#" className="hover:text-purple-400"><FaInstagram size={20} /></Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">Subscribe to get updates on new artworks and offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button className="bg-purple-600 px-4 py-2 rounded-r text-white hover:bg-purple-700">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2024 ArtHub. All rights reserved.
      </div>
    </footer>
  );
}
