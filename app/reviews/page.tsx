import { getAllReviews, getAllCategories } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

// 1. Metadata Export
export const metadata = {
  title: "All Reviews - Creatives by Victoria",
  description: "Browse our collection of honest, aesthetic reviews.",
};

// 2. Revalidation Export
export const revalidate = 60;

// 3. The Main Component Export (MUST have 'export default')
export default async function AllReviewsPage() {
  const reviews = await getAllReviews();
  const categories = await getAllCategories();

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-6">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
          The Archive
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-xl mx-auto">
          Every product I've tested, sorted and ranked. Find the perfect gear for your setup.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md py-4 border-b border-gray-100 mb-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          <Link 
            href="/reviews"
            className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-medium shadow-md transition-all"
          >
            All Reviews
          </Link>
          {categories.map((cat: any) => (
            <Link
              key={cat.slug}
              href={`/reviews/category/${cat.slug}`}
              className="px-5 py-2 rounded-full bg-gray-50 text-gray-600 border border-gray-200 text-sm font-medium hover:border-primary hover:text-primary transition-all"
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </div>

      {/* The Grid of Reviews */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {reviews.length > 0 ? (
          reviews.map((review: any) => (
            <Link 
              key={review.slug} 
              href={`/reviews/${review.slug}`}
              className="group block"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-2xl overflow-hidden mb-5 shadow-sm border border-gray-100 group-hover:shadow-xl transition-all duration-500">
                {review.mainImage ? (
                  <Image
                    src={review.mainImage}
                    alt={review.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-300">No Image</div>
                )}
                
                {/* Rating Badge */}
                {review.rating && (
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-gray-900 shadow-sm flex items-center gap-1">
                    ⭐ {review.rating}
                  </div>
                )}
              </div>

              {/* Card Text */}
              <div className="px-2">
                <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase mb-3 text-gray-400">
                  <span className="text-primary">{review.categories?.[0] || "Review"}</span>
                  <span>•</span>
                  <span>{review.publishedAt ? formatDate(review.publishedAt) : "New"}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins group-hover:text-primary transition-colors leading-tight">
                  {review.title}
                </h3>
                
                <p className="text-gray-500 text-sm line-clamp-2 font-light leading-relaxed">
                  {review.summary}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400">No reviews found yet.</p>
          </div>
        )}
      </div>

    </main>
  );
}