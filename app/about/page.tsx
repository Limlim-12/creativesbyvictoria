import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Victoria - Creatives by Victoria",
  description: "Nurse, Creator, and Product Reviewer.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. Hero / Intro Section */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Side (Updated with Nurse Bio) */}
          <div className="order-2 md:order-1">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              The Editor
            </span>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Victoria.</span>
            </h1>
            <h2 className="text-xl text-gray-500 font-light mb-8">
              Nurse, Product Reviewer, and Lifestyle Creator.
            </h2>
            <div className="prose prose-lg text-gray-600 font-light leading-relaxed mb-8">
              <p>
                By day, I am a nurse trained to care for people and pay attention to the smallest details. By night, I channel that same dedication into <strong>Creatives by Victoria</strong>.
              </p>
              <p>
                I don't just focus on one niche. From tech gadgets that boost productivity to lifestyle essentials that make home life better, I partner with diverse brands to test <strong>what actually works</strong>. 
              </p>
              <p>
                My mission is to bridge the gap between innovative brands and the people who need them—providing honest insights that help you buy with confidence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-primary transition-all shadow-lg text-center">
                Partner with me
              </Link>
              <Link href="/reviews" className="px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:border-primary hover:text-primary transition-all text-center">
                Read my reviews
              </Link>
            </div>
          </div>

          {/* Image Side (With your photo fix) */}
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:ml-auto rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/vic.jpg" 
                alt="Victoria working"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative blob behind */}
            <div className="absolute top-10 right-[-20px] w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </section>

      {/* 2. "Current Favorites" Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-12">
            Current Favorites 🌟
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="font-bold text-gray-900 text-sm">Tech</h4>
              <p className="text-xs text-gray-500">Productivity Gear</p>
            </div>
            {/* Item 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-4xl mb-4">🧴</div>
              <h4 className="font-bold text-gray-900 text-sm">Lifestyle</h4>
              <p className="text-xs text-gray-500">Daily Essentials</p>
            </div>
            {/* Item 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-4xl mb-4">🩺</div>
              <h4 className="font-bold text-gray-900 text-sm">Wellness</h4>
              <p className="text-xs text-gray-500">Self-care & Health</p>
            </div>
            {/* Item 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="font-bold text-gray-900 text-sm">Home</h4>
              <p className="text-xs text-gray-500">Decor & Organization</p>
            </div>
          </div>

          <p className="mt-10 text-sm text-gray-400 italic">
            *I only recommend products I have personally tested and verified.
          </p>
        </div>
      </section>

    </main>
  );
}