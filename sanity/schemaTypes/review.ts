import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Product Review',
  type: 'document',
  groups: [
    { name: 'meta', title: 'SEO & Metadata' },
    { name: 'content', title: 'Review Content' },
    { name: 'affiliate', title: 'Affiliate & Settings' },
  ],
  fields: [
    // --- 1. Basic Info ---
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
      group: 'meta',
    }),
    
    // --- 2. The "At a Glance" Data (Hero Section) ---
    defineField({
      name: 'mainImage',
      title: 'Main Product Image',
      type: 'image',
      options: { hotspot: true }, // Allows cropping
      fields: [
        { name: 'alt', title: 'Alt Text (for SEO)', type: 'string' }
      ],
      group: 'content',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (0-5)',
      type: 'number',
      validation: (rule) => rule.min(0).max(5).precision(1),
      description: 'Used for the ⭐ or 💜 display',
      group: 'content',
    }),
    defineField({
      name: 'summary',
      title: 'TL;DR Summary',
      type: 'text',
      rows: 3,
      description: 'Short snippet for the hero section and Google meta description.',
      group: 'content',
    }),

    // --- 3. Affiliate Links (Crucial for Revenue) ---
    defineField({
      name: 'affiliateLinks',
      title: 'Buy Buttons',
      type: 'array',
      group: 'affiliate',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Button Text', type: 'string', initialValue: 'Check Price' },
            { name: 'url', title: 'Affiliate URL', type: 'url' },
            { name: 'platform', title: 'Platform', type: 'string', options: {
              list: [
                { title: 'Amazon', value: 'amazon' },
                { title: 'Shopee', value: 'shopee' },
                { title: 'Lazada', value: 'lazada' },
                { title: 'Official Site', value: 'official' },
              ]
            }}
          ]
        }
      ]
    }),

    // --- 4. Deep Dive Content ---
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image' }],
      options: { layout: 'grid' },
      group: 'content',
    }),
    defineField({
      name: 'pros',
      title: 'Pros ✅',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
    }),
    defineField({
      name: 'cons',
      title: 'Cons ❌',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Full Review',
      type: 'array', 
      of: [{ type: 'block' }, { type: 'image' }], // "Portable Text"
      group: 'content',
    }),

    // --- 5. Organization & Linking ---
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      group: 'meta',
    }),
    defineField({
      name: 'alternatives',
      title: 'Alternative Products',
      description: 'Link to other reviews for the "You might also like" section',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'review' } }],
      group: 'content',
    }),

    // --- 6. Legal & Badges ---
    defineField({
      name: 'isSponsored',
      title: 'Is this a Sponsored Post?',
      type: 'boolean',
      initialValue: false,
      group: 'affiliate',
    }),
  ],
})

defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
    })

