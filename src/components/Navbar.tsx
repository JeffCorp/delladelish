"use client"

import { Menu, ShoppingBag, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  // Show cookie consent on component mount if not previously accepted
  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowCookieConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowCookieConsent(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 font-bold text-xl">
              <span className="text-red-600">Dela</span>
              <span className="text-orange-500">Delish</span>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center space-x-6">
              <li className="text-gray-800 hover:text-red-600 font-medium">Home</li>
              <li className="text-gray-800 hover:text-red-600 font-medium">Menu</li>
              <li className="text-gray-800 hover:text-red-600 font-medium">Blog</li>
              <li className="text-gray-800 hover:text-red-600 font-medium">View Meal Plan</li>
              <li className="text-gray-800 hover:text-red-600 font-medium">About Us</li>
              <li className="text-gray-800 hover:text-red-600 font-medium">Contact</li>
            </ul>

            {/* Right side - Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="relative p-2 text-gray-700 hover:text-red-600">
                <ShoppingBag size={22} />
                <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
              </button>
              <button className="text-red-600 hover:text-red-700 font-medium">
                Login
              </button>
              <button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white py-2 px-5 rounded-full font-medium">
                Order Now
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full font-medium">
                Sign Up
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
                <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-orange-100 hover:text-red-600 rounded-md">Home</a>
                <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-orange-100 hover:text-red-600 rounded-md">Menu</a>
                <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-orange-100 hover:text-red-600 rounded-md">Blog</a>
                <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-orange-100 hover:text-red-600 rounded-md">View Meal Plan</a>
                <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-orange-100 hover:text-red-600 rounded-md">About Us</a>
                <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-orange-100 hover:text-red-600 rounded-md">Contact</a>
                <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-200">
                  <button className="text-red-600 hover:text-red-700 font-medium px-3 py-2">Login</button>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full text-sm font-medium">Sign Up</button>
                </div>
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white py-2 px-4 rounded-full font-medium mt-2">
                  Order Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cookie Consent Modal */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 p-4 md:flex md:items-center md:justify-between">
          <div className="mb-4 md:mb-0 pr-10 flex-[3]">
            <h4 className="font-bold text-gray-800 mb-1">We value your privacy</h4>
            <p className="text-gray-600 text-sm">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 flex-[1]">
            <button
              onClick={declineCookies}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 font-medium text-sm"
            >
              Decline
            </button>
            <button
              onClick={() => setShowCookieConsent(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 font-medium text-sm"
            >
              Preferences
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white rounded-md font-medium text-sm"
            >
              Accept All
            </button>
          </div>
        </div>
      )}
    </>


  );
};

export default Navbar;