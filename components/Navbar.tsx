"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to check if link is active
  const isActive = (path: string) => pathname === path ? "text-primary font-bold" : "text-gray-600 hover:text-primary";

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 1. Logo */}
        <Link href="/" className="text-xl font-poppins font-bold text-primary tracking-tight" onClick={() => setIsMobileMenuOpen(false)}>
          creativesbyvictoria
        </Link>

        {/* 2. Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/reviews" className={isActive("/reviews")}>Reviews</Link>
          <Link href="/about" className={isActive("/about")}>About</Link>
          
          {/* Search Icon */}
          <Link href="/search" className="text-gray-400 hover:text-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </Link>

          <Link href="/contact" className="px-5 py-2 bg-primary text-white rounded-full text-xs font-bold hover:bg-secondary transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Contact
          </Link>
        </div>

        {/* 3. Mobile Menu Button (Visible on Phone/Tablet only) */}
        <button 
          className="md:hidden text-gray-600 p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            /* Close Icon (X) */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            /* Hamburger Icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* 4. Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`text-lg ${isActive("/")}`}>Home</Link>
          <Link href="/reviews" onClick={() => setIsMobileMenuOpen(false)} className={`text-lg ${isActive("/reviews")}`}>Reviews</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`text-lg ${isActive("/about")}`}>About</Link>
          <Link href="/search" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-600">Search</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-primary font-bold">Contact Me</Link>
        </div>
      )}
    </nav>
  );
}