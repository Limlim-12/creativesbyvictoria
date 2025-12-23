import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image"; // You might need to check if this helper exists
import Image from "next/image";

// Define how custom blocks should look
const components = {
  types: {
    image: ({ value }: any) => {
      // If the image has a caption, we can render it too
      return (
        <div className="relative w-full h-96 my-8 rounded-soft overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Review image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-poppins font-semibold text-primary mt-10 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-poppins font-medium text-gray-800 mt-8 mb-3">{children}</h3>,
    normal: ({ children }: any) => <p className="text-lg text-gray-700 leading-relaxed mb-6 font-inter">{children}</p>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-accent pl-4 italic text-gray-600 my-6">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc ml-6 space-y-2 mb-6 text-gray-700">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-6 space-y-2 mb-6 text-gray-700">{children}</ol>,
  },
};

export default function RichText({ content }: { content: any }) {
  return <PortableText value={content} components={components} />;
}