import { getReview, getAllReviewSlugs, getRelatedReviews } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ProsCons from "@/components/ProsCons";
import RichText from "@/components/RichText";
import { formatDate } from "@/lib/utils";
import RelatedReviews from "@/components/RelatedReviews";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllReviewSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = await getReview(slug);

  if (!review) {
    return {
      title: "Review Not Found",
    };
  }

  return {
    title: review.title,
    description: review.summary,
    openGraph: {
      title: review.title,
      description: review.summary,
      images: [
        {
          url: review.mainImage,
          width: 1200,
          height: 630,
          alt: review.title,
        },
      ],
    },
  };
}

export default async function ReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const review = await getReview(slug);

  if (!review) return notFound();

  // Fetch related reviews based on the current category
  const currentCategorySlug = review.categories?.[0]?.slug;
  const relatedReviews = currentCategorySlug 
    ? await getRelatedReviews(currentCategorySlug, slug) 
    : [];

  return (
    <article className="min-h-screen bg-background pb-20">
      
      <header className="max-w-4xl mx-auto pt-12 px-6 text-center">
        
        <div className="flex items-center justify-center gap-4 mb-6 text-sm">
          {review.categories && review.categories[0] && (
            <span className="bg-white px-3 py-1 rounded-full font-bold tracking-wide text-primary border border-primary/20 uppercase text-xs shadow-sm">
              {review.categories[0].title}
            </span>
          )}
          {review.publishedAt && (
            <span className="text-gray-500 font-medium">
              {formatDate(review.publishedAt)}
            </span>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6 leading-tight">
          {review.title}
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-inter">
          {review.summary}
        </p>
      </header>

      {review.mainImage && (
        <div className="max-w-5xl mx-auto mt-10 px-4">
          <div className="relative w-full h-[50vh] md:h-[65vh] rounded-soft-lg overflow-hidden shadow-2xl border border-white/50">
             <Image 
               src={review.mainImage} 
               alt={review.title} 
               fill 
               className="object-cover"
               priority
             />
             {review.rating && (
               <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-xl text-lg font-bold shadow-lg text-primary flex items-center gap-2">
                 ⭐ {review.rating}/5
               </div>
             )}
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 mt-16">
        
        {review.affiliateLinks && (
          <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-soft border border-primary/10 shadow-sm mb-12 gap-4">
             <div>
               <h3 className="font-bold text-gray-900 text-lg">Interest piqued?</h3>
               <p className="text-gray-500 text-sm">Check the latest prices and deals.</p>
             </div>
             <div className="flex gap-3">
               {review.affiliateLinks.map((link: any, i: number) => (
                 <a 
                   key={i} 
                   href={link.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg text-sm"
                 >
                   {link.label || "Check Price"} ↗
                 </a>
               ))}
             </div>
          </div>
        )}

        <ProsCons pros={review.pros} cons={review.cons} />

        <div className="prose prose-lg prose-headings:font-poppins prose-headings:font-semibold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary prose-img:rounded-soft my-12">
          <RichText content={review.body} />
        </div>

        {review.affiliateLinks && (
          <div className="mt-16 text-center border-t border-gray-200 pt-10">
            <p className="text-gray-600 mb-6 italic">Thanks for reading! If you found this helpful, check out the product below:</p>
            <a 
              href={review.affiliateLinks[0].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white font-bold py-4 px-10 rounded-full hover:bg-primary transition-all shadow-xl hover:-translate-y-1"
            >
              Get the {review.title}
            </a>
          </div>
        )}

        <RelatedReviews reviews={relatedReviews} />
        
        <div className="mt-12 text-center pb-12">
            <Link href="/reviews" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors">
                ← Back to all reviews
            </Link>
        </div>

      </div>
    </article>
  );
}