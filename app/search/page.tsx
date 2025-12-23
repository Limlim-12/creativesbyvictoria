import { searchReviews } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

// This ensures the page reads the URL parameters correctly
interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export const metadata = {
  title: "Search Results - Creatives by Victoria",
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams; // Get the query from the URL
  const query = q || ""; // Default to empty string if missing
  
  // Fetch results only if there is a query
  const reviews = query ? await searchReviews(query) : [];

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-2">Search Results</p>
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900">
            {query ? `Showing results for "${query}"` : "Search the Archive"}
          </h1>
        </div>

        {/* Search Input (For searching again) */}
        <div className="mb-16 max-w-xl">
           <form action="/search" method="GET" className="relative">
             <input
               type="text"
               name="q"
               defaultValue={query}
               placeholder="Try 'Desk Setup', 'Mouse', 'Camera'..."
               className="w-full pl-6 pr-14 py-4 rounded-full bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
             />
             <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full hover:bg-primary transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
             </button>
           </form>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reviews.length > 0 ? (
            reviews.map((review: any) => (
              <Link 
                key={review.slug} 
                href={`/reviews/${review.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-2xl overflow-hidden mb-5 shadow-sm border border-gray-100 group-hover:shadow-xl transition-all duration-500">
                  {review.mainImage && (
                    <Image
                      src={review.mainImage}
                      alt={review.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {review.rating && (
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-gray-900 shadow-sm">
                      ⭐ {review.rating}
                    </div>
                  )}
                </div>

                <div className="px-2">
                  <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase mb-3 text-gray-400">
                    <span className="text-primary">{review.categories?.[0] || "Review"}</span>
                    <span>•</span>
                    <span>{review.publishedAt ? formatDate(review.publishedAt) : "Date"}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins group-hover:text-primary transition-colors">
                    {review.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{review.summary}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-12 text-center border border-dashed border-gray-200 rounded-2xl bg-gray-50">
               <p className="text-gray-500">
                 {query ? `No matches found for "${query}".` : "Enter a keyword above to start searching."}
               </p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}