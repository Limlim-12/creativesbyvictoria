import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Creatives by Victoria",
  description: "Let's collaborate! Get in touch via email or social media.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decor (Blurry blobs for aesthetic vibe) */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-lg rounded-soft-lg p-8 md:p-12 shadow-xl border border-white/50 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Say Hello
          </span>
          <h1 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            Let's Connect! 🌸
          </h1>
          <p className="text-gray-600 leading-relaxed font-inter">
            Have a product for review? Want to collaborate? <br className="hidden md:block"/>
            Or just want to chat about desk setups? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="space-y-4">
          
          {/* 1. Email Card (Primary Action) */}
          <a 
            href="mailto:veeyuhangela@gmail.com"
            className="group flex items-center gap-5 p-5 bg-white rounded-soft border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 font-poppins">Email Me</h3>
              <p className="text-sm text-gray-500 group-hover:text-primary transition-colors">veeyuhangela@gmail.com</p>
            </div>
            <div className="ml-auto text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all">
              →
            </div>
          </a>

          {/* 2. Socials Row */}
          <div className="grid md:grid-cols-2 gap-4">
            
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/creativesbyvictoria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-white rounded-soft border border-gray-100 shadow-sm hover:shadow-md hover:border-pink-300 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm font-poppins">Instagram</h3>
                <p className="text-xs text-gray-400">@creativesbyvictoria</p>
              </div>
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@spicychickenwingshuhuplz?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-white rounded-soft border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-400 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-100 text-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                {/* Custom TikTok SVG Path */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm font-poppins">TikTok</h3>
                <p className="text-xs text-gray-400">@spicychickenwings...</p>
              </div>
            </a>

          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Business Inquiries</p>
          <p className="text-sm text-gray-600">
            Please include <span className="font-semibold text-primary">"Partnership"</span> in your subject line for priority response.
          </p>
        </div>

      </div>
    </main>
  );
}