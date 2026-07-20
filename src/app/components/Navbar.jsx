"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link, Button,Avatar } from "@heroui/react";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const isLoggedIn=true
  
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/browse", label: "Browse Artworks" },

  ];

  return (
    <nav className="sticky top-0 z-40 container mx-auto border-b border-separator bg-background/70 backdrop-blur-lg">
      <div className=" px-6">
         <header className="flex h-16 items-center justify-between">
          {/* Left side: Logo + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div className="flex items-center gap-2">
  <Image
    src="/logo.png"   // ✅ file inside public/logo.png
    alt="ArtHub Logo"
    width={32}
    height={32}
  />
  <span className="font-bold text-purple-600">ArtHub</span>
</div>

          </div>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "text-purple-600 font-semibold"
                      : "text-gray-700"
                  } hover:text-purple-600`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4 relative">
            {isLoggedIn ? (
              <div className="relative">
                 <Avatar
                   className="cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                 >
        <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Dashboard
                    </Link>
                    <button
                      onClick={() => alert("Sign out logic here")}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                as={Link}
                href="/login"
                className="bg-purple-600 text-white hover:bg-purple-700"
              >
                Login
              </Button>
            )}
          </div>
        </header>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 ${
                      pathname === link.href
                        ? "text-purple-600 font-semibold"
                        : "text-gray-700"
                    } hover:text-purple-600`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                {isLoggedIn ? (
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/profile"
                      className="block py-2 hover:text-purple-600"
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/dashboard"
                      className="block py-2 hover:text-purple-600"
                    >
                      My Dashboard
                    </Link>
                    <button
                      onClick={() => alert("Sign out logic here")}
                      className="block py-2 text-left hover:text-purple-600"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Button
                    as={Link}
                    href="/login"
                    className="w-full bg-purple-600 text-white hover:bg-purple-700"
                  >
                    Login
                  </Button>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
