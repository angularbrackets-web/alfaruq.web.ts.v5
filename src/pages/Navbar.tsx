import React, { useState, useEffect } from 'react';
import { useRef } from "react"
import Link from "next/link";

const Navbar = () => {

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const mobileMenuButtonClick = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('hidden');
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              My Website
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                
                  About
                
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                
                  Services
               
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                
                  Contact
                
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"              
              onClick={mobileMenuButtonClick}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>              
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {/* Entering: "duration-200 ease-out" */}
      {/* From: "opacity-0 scale-95" */}
      {/* To: "opacity-100 scale-100" */}
      {/* Leaving: "duration-100 ease-in" */}
      {/* From: "opacity-100 scale-100" */}
      {/* To: "opacity-0 scale-95" */}
      <div ref={mobileMenuRef} className="mobile-menu hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            
              About
            
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            
              Services
            
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            
              Contact
            
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
