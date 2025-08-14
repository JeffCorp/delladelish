"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log(pathname);

  return (
    <header className="bg-[#111111a1] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/dark-logo.png" alt="Dela Delish" width={32} height={32} />
            <span className="flex">
              <span className="text-[24px] font-bold text-white">dela</span>
              <span className="text-[24px] font-light text-white">delish</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/menu" className={`hover:font-bold transition-colors ${pathname === '/menu' ? ('text-white font-bold underline decoration-2 decoration-white') : 'text-white'}`}>
              Menu
            </Link>
            <Link href="/meal-plans" className={`hover:font-bold transition-colors ${pathname === '/meal-plans' ? ('text-white font-bold underline decoration-2 decoration-white') : 'text-white'}`}>
              Meal Plans
            </Link>
            <Link href="/about" className={`hover:font-bold transition-colors ${pathname === '/about' ? ('text-white font-bold underline decoration-2 decoration-white') : 'text-white'}`}>
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-white bg-transparent font-light !rounded-none hidden md:block">
              Sign in
            </Button>
            <Button className="bg-food-red hover:bg-food-red/80 font-bold !rounded-none hidden md:block">Sign up</Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
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
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link
                href="/menu"
                className={`hover:font-bold transition-colors ${pathname === '/menu' ? ('text-gray-200 font-bold underline decoration-2 decoration-gray-200') : 'text-gray-200'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/meal-plans"
                className={`hover:font-bold transition-colors ${pathname === '/meal-plans' ? ('text-gray-200 font-bold underline decoration-2 decoration-gray-200') : 'text-gray-200'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meal Plans
              </Link>
              <Link
                href="/about"
                className={`hover:font-bold transition-colors ${pathname === '/about' ? ('text-gray-200 font-bold underline decoration-2 decoration-gray-200') : 'text-gray-200'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="ghost" className="text-gray-200 font-light !rounded-none justify-start">
                  Sign in
                </Button>
                <Button className="bg-food-red hover:bg-food-red/90 font-bold !rounded-none justify-start">
                  Sign up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar;