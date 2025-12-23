import { getRecentReviews, getAllCategories } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export const revalidate = 60; // Revalidate data every 60 seconds

export default async function HomePage() {
  const reviews = await getRecentReviews();
  const categories = await getAllCategories();

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION (Polished & Professional) */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-white border border-gray-200 text-xs font-bold tracking-widest text-primary shadow-sm mb-6 animate-fade-in-up">
            EST. 2025 • CREATIVES BY VICTORIA
          </span>
          
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Precision meets <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Aesthetics.
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Curated tech, desk setups, and lifestyle essentials. 
            I review the gear with care—testing both form and function—so you can upgrade your life with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reviews" className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-primary transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1">
              Browse the Archive
            </Link>
            <Link href="/about" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all">
              Meet Victoria
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY SCROLL (App-like feel) */}
      <section className="border-b border-gray-100 sticky top-16 bg-white/80 backdrop-blur-md z-40 py-4">
        <div className="max-w-6xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-3 min-w-max">
            {categories.map((cat: any) => (
              <Link
                key={cat.slug}
                href={`/reviews/category/${cat.slug}`}
                className="px-5 py-2 rounded-full bg-gray-50 border border-gray-100 text-sm font-medium text-gray-600 hover:bg-white hover:border-primary hover:text-primary transition-all whitespace-nowrap"
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LATEST REVIEWS GRID (Magazine Layout) */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-poppins font-bold text-gray-900">Fresh off the press</h2>
            <p className="text-gray-500 mt-2">The latest tools I've been testing.</p>
          </div>
          <Link href="/reviews" className="hidden md:block text-primary font-medium hover:underline">
            View Archive →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.length > 0 ? (
            reviews.map((review: any, index: number) => (
              <Link 
                key={review.slug} 
                href={`/reviews/${review.slug}`}
                className="group flex flex-col"
              >
                {/* Image Card */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  {review.mainImage ? (
                    <Image
                      src={review.mainImage}
                      alt={review.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                  )}
                  {/* Floating Date Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                    {review.publishedAt ? formatDate(review.publishedAt) : "New"}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-3 text-xs font-bold tracking-widest text-primary uppercase">
                    <span>{review.categories?.[0]?.title || "Review"}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-gray-400">5 Min Read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins leading-snug group-hover:text-primary transition-colors">
                    {review.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 leading-relaxed font-light">
                    {review.summary}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 py-20">
              No reviews published yet. Time to write! ✍️
            </p>
          )}
        </div>
      </section>

      {/* 4. NEWSLETTER / FOOTER CTA */}
      <section className="bg-gray-900 text-white py-24 px-6 mt-12 rounded-t-[3rem]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Never miss a setup upgrade.</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Join the creative circle. Get the latest reviews and desk inspiration delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all"
            />
            <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-6">No spam, just aesthetics. Unsubscribe anytime.</p>
        </div>
      </section>

    </main>
  );
}