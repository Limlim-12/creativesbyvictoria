import { getReviewsByCategory, getAllCategories } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";

// Define PageProps for Next.js 15+
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((cat: any) => ({ slug: cat.slug }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const reviews = await getReviewsByCategory(slug);
  const categories = await getAllCategories();

  // Find current category title for the header
  const currentCategory = categories.find((c: any) => c.slug === slug);

  if (!currentCategory) return notFound();

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-6">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 inline-block">
          Category
        </span>
        <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6 capitalize">
          {currentCategory.title}
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-xl mx-auto">
          Curated reviews and guides focused on {currentCategory.title}.
        </p>
      </div>

      {/* Filter Bar (Keep it consistent) */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md py-4 border-b border-gray-100 mb-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          <Link 
            href="/reviews"
            className="px-5 py-2 rounded-full bg-gray-50 text-gray-600 border border-gray-200 text-sm font-medium hover:border-primary hover:text-primary transition-all"
          >
            All Reviews
          </Link>
          {categories.map((cat: any) => (
            <Link
              key={cat.slug}
              href={`/reviews/category/${cat.slug}`}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                cat.slug === slug 
                  ? "bg-gray-900 text-white shadow-md" 
                  : "bg-gray-50 text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </div>

      {/* The Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {reviews.length > 0 ? (
          reviews.map((review: any) => (
            <Link 
              key={review.slug} 
              href={`/reviews/${review.slug}`}
              className="group block"
            >
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
                
                {review.rating && (
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-gray-900 shadow-sm flex items-center gap-1">
                    ⭐ {review.rating}
                  </div>
                )}
              </div>

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
            <p className="text-gray-400">No reviews found in this category yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}