import React from "react";

interface ProsConsProps {
  pros?: string[];
  cons?: string[];
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
  if (!pros && !cons) return null;

  return (
    <div className="grid md:grid-cols-2 gap-6 my-16">
      
      {/* PROS CARD */}
      <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-green-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 font-poppins">The Good Stuff</h3>
        </div>
        <ul className="space-y-4">
          {pros?.map((item, i) => (
            <li key={i} className="flex items-start text-gray-700 text-sm leading-relaxed">
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CONS CARD */}
      <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-red-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-red-400"></div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 font-poppins">The Drawbacks</h3>
        </div>
        <ul className="space-y-4">
          {cons?.map((item, i) => (
            <li key={i} className="flex items-start text-gray-700 text-sm leading-relaxed">
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}