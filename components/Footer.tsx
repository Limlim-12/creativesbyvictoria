import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Brand Name */}
        <h2 className="text-lg font-poppins font-bold text-gray-800 mb-4">
          creativesbyvictoria
        </h2>
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-500 font-medium">
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/reviews" className="hover:text-primary transition-colors">Reviews</Link>
          {/* Note: You should create a simple text page for this later for legal compliance */}
          <span className="text-gray-300">|</span> 
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="text-xs text-gray-400 font-inter leading-relaxed mb-8">
          <p>© {new Date().getFullYear()} Victoria. All rights reserved.</p>
          <p>Some links on this site are affiliate links. I may earn a commission at no extra cost to you.</p>
        </div>

        {/* Developer Credit (The Agency Signature) */}
        <div className="border-t border-gray-50 pt-8 mt-8">
          <p className="text-[10px] text-gray-300 uppercase tracking-widest">
            Designed & Developed by
          </p>
          <p className="text-xs font-bold text-gray-400 mt-1 hover:text-primary transition-colors cursor-default">
            limITless Technologies Inc.
          </p>
        </div>

      </div>
    </footer>
  );
}