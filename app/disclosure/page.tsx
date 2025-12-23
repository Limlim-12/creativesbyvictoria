export const metadata = {
  title: "Affiliate Disclosure - Creatives by Victoria",
};

export default function DisclosurePage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-poppins prose-a:text-primary">
        <h1>Affiliate Disclosure</h1>
        <p className="lead">
          Transparency is important to me. Here is how <strong>Creatives by Victoria</strong> makes money and keeps the lights on.
        </p>
        
        <hr className="my-8 border-gray-100"/>

        <h3>1. Affiliate Links</h3>
        <p>
          Some of the links on this website are "affiliate links." This means if you click on the link and purchase the item, I may receive an affiliate commission. This comes at <strong>no extra cost to you</strong>.
        </p>
        <p>
          Regardless of this, I only recommend products or services I believe will add value to my readers. I am disclosing this in accordance with the Federal Trade Commission’s 16 CFR, Part 255: “Guides Concerning the Use of Endorsements and Testimonials in Advertising.”
        </p>

        <h3>2. Amazon Associates Program</h3>
        <p>
          <strong>Creatives by Victoria</strong> is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
        </p>
        <p>
          As an Amazon Associate, I earn from qualifying purchases.
        </p>

        <h3>3. Honest Opinions</h3>
        <p>
          Even though I may receive compensation for posts or advertisements, I always give my honest opinions, findings, beliefs, or experiences on those topics or products. The views and opinions expressed on this blog are purely my own.
        </p>
      </div>
    </main>
  );
}