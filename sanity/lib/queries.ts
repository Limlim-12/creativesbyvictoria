import { groq } from "next-sanity";
import { client } from "./client";

// 1. Get all slugs for static generation
export async function getAllReviewSlugs() {
  return client.fetch(groq`*[_type == "review" && defined(slug.current)][].slug.current`);
}

// 2. Get a SINGLE review (Updated with categories as objects + publishedAt)
export async function getReview(slug: string) {
  return client.fetch(groq`*[_type == "review" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    rating,
    summary,
    affiliateLinks,
    pros,
    cons,
    body,
    "categories": categories[]->{title, "slug": slug.current},
    publishedAt
  }`, { slug });
}

// 3. Get Related Reviews (The new feature)
export async function getRelatedReviews(categorySlug: string, currentSlug: string) {
  return client.fetch(groq`*[_type == "review" && slug.current != $currentSlug && $categorySlug in categories[]->slug.current] | order(publishedAt desc)[0...3]{
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    rating,
    publishedAt
  }`, { categorySlug, currentSlug });
}

// 4. Get ALL reviews for the listing page
export async function getAllReviews() {
  return client.fetch(groq`*[_type == "review"] | order(publishedAt desc){
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    summary,
    rating,
    "categories": categories[]->title,
    publishedAt
  }`);
}

// 5. Get recent reviews for Home Page
export async function getRecentReviews() {
  return client.fetch(groq`*[_type == "review"] | order(publishedAt desc)[0...6]{
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    summary,
    rating,
    "categories": categories[]->{title}, // Ensure this is an object fetch
    publishedAt
  }`);
}

// 6. Get all categories
export async function getAllCategories() {
  return client.fetch(groq`*[_type == "category"] | order(title asc){
    title,
    "slug": slug.current
  }`);
}

// 7. Get reviews by category
export async function getReviewsByCategory(slug: string) {
  return client.fetch(groq`*[_type == "review" && $slug in categories[]->slug.current] | order(publishedAt desc){
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    summary,
    rating,
    "categories": categories[]->title,
    publishedAt
  }`, { slug });
}

// Search Query
export async function searchReviews(query: string) {
  // This looks for the 'query' text inside the title OR the summary
  const searchString = `*[_type == "review" && (title match $query + "*" || summary match $query + "*")] | order(publishedAt desc){
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    rating,
    summary,
    publishedAt,
    "categories": categories[]->title
  }`;
  
  return client.fetch(searchString, { query });
}