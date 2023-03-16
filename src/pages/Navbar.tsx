import React, { useState, useEffect } from 'react';
import { useRef } from "react"
import Link from "next/link";
import { FaMoneyCheckAlt } from 'react-icons/fa';

const Navbar = () => {

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  

  const mobileMenuButtonClick = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('hidden');
    }
  };



  return (
    <nav className="bgDarkTeal sticky top-0 z-30">
      <div className="md:container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              My Website
            </Link>
          </div> */}

          <div className="flex-shrink-0">
                <a href="#Home" className="flex items-center py-4 px-2 text-lime-100">
                  <span>
                  <svg className='w-10 h-10 mr-5' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_iconCarrier"> <title>mosque</title> 
            <g id="mosque"> 
            <circle cx="43.5" cy="8.5" r="1.5"></circle> 
            <circle cx="47" cy="16" r="1"></circle> 
            <line x1="54" y1="8.463" x2="54" y2="9.878" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="54" y1="14.122" x2="54" y2="15.537" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="50.463" y1="12" x2="51.878" y2="12" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="56.122" y1="12" x2="57.537" y2="12" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <path d="M55.689,39.588A13.8,13.8,0,0,0,57,33.636c0-6.326-9-11.454-9-11.454a24.758,24.758,0,0,0-2.146,1.425" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path> 
            <path d="M20.846,19a12.891,12.891,0,0,0,1.287-5.714C22.133,7.605,14.5,3,14.5,3S6.867,7.605,6.867,13.286A12.891,12.891,0,0,0,8.154,19Z" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path> 
            <path d="M44,31.533a9.9,9.9,0,0,0,2-5.9c0-6.326-14-11.454-14-11.454S18,19.31,18,25.636a9.888,9.888,0,0,0,2,5.9" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path> 
            <path d="M44.389,40H56.5A1.5,1.5,0,0,1,58,41.5h0A1.5,1.5,0,0,1,56.5,43H44.324" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path> 
            <rect x="17" y="32" width="30" height="3" rx="1.5" ry="1.5" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></rect> 
            <polyline points="29 60.554 29 43 32 40 35 43 35 60.554" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polyline> 
            <line x1="32" y1="14" x2="32" y2="10" fill="none" stroke="#ECFCCB" strokeLinejoin="round" strokeWidth="2px"></line> 
            <path d="M32.191,4.66a3,3,0,0,0,3.166,5.1" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path> 
            <path d="M19.564,44H8.5A1.5,1.5,0,0,0,7,45.5H7A1.5,1.5,0,0,0,8.5,47H19.637" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path> 
            <line x1="51" y1="43" x2="51" y2="48" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="48" y1="43" x2="48" y2="48" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="39" y1="35" x2="39" y2="50" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="25" y1="35" x2="25" y2="50" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="13" y1="47.364" x2="13" y2="52" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="16" y1="47.364" x2="16" y2="52" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="13" y1="39" x2="13" y2="43.564" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="16" y1="39" x2="16" y2="43.564" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="60" y1="61" x2="4" y2="61" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="9" y1="44" x2="9" y2="19" fill="none" stroke="#ECFCCB" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="20" y1="21" x2="20" y2="20" fill="none" stroke="#ECFCCB" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="55" y1="43" x2="55" y2="61" fill="none" stroke="#ECFCCB" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="9" y1="47" x2="9" y2="61" fill="none" stroke="#ECFCCB" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="20" y1="61" x2="20" y2="35" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            <line x1="44" y1="61" x2="44" y2="35" fill="none" stroke="#ECFCCB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line> 
            </g> </g>
            </svg>
                  </span>
                  <span className="font-semibold text-xl tracking-tight">Al Faruq Islamic Centre</span>
                </a>
              </div>


          <div className="hidden md:block">
            <div className='flex gap-28'>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#Home" className="text-lime-100 hover:text-lime-500 hover:text-lg px-3 py-2 rounded-md text-sm font-medium">                
                  Home                
              </Link>
              <Link href="#PrayerTimes" className="text-lime-100 hover:text-lime-500 hover:text-lg px-3 py-2 rounded-md text-sm font-medium">                
                  Prayer Times               
              </Link>
              <Link href="#Programs" className="text-lime-100 hover:text-lime-500 hover:text-lg px-3 py-2 rounded-md text-sm font-medium">                
                  Programs                
              </Link>
              
            </div>
            <div className=''>
            <Link href='#Donate' className="flex items-center align-middle justify-end h-12 px-10 py-2 text-lg text-slate-800 font-extrabold transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-cyan-500"><span className='mr-3'><FaMoneyCheckAlt /></span>Donate</Link>
            </div>
            </div>
            
            
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"              
              onClick={() => setShowMobileMenu(true)}
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
      <div ref={mobileMenuRef} className={`mobile-menu ${showMobileMenu ? 'block' : 'hidden'} `} onMouseLeave={() => setShowMobileMenu(false)} >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#Home" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setShowMobileMenu(false)}>
            
              Home
            
          </Link>
          <Link href="#PrayerTimes" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setShowMobileMenu(false)}>
            
              Prayer Times
            
          </Link>
          <Link href="#Programs" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setShowMobileMenu(false)}>
            
              Programs
            
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
