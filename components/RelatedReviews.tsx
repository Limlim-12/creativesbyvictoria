import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

export default function RelatedReviews({ reviews }: { reviews: any[] }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="border-t border-gray-100 pt-16 mt-16">
      <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-8 text-center">
        You Might Also Like ✨
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review: any) => (
          <Link 
            key={review.slug} 
            href={`/reviews/${review.slug}`}
            className="group block bg-white rounded-soft border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
          >
            {/* Image */}
            <div className="relative h-48 w-full bg-gray-100">
              {review.mainImage && (
                <Image
                  src={review.mainImage}
                  alt={review.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              {review.rating && (
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-primary shadow-sm">
                  ⭐ {review.rating}
                </div>
              )}
            </div>

            {/* Text */}
            <div className="p-4">
              <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                {review.title}
              </h4>
              <p className="text-xs text-gray-400">
                {review.publishedAt ? formatDate(review.publishedAt) : "Recently updated"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}