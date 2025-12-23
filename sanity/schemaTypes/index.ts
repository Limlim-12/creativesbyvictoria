import { type SchemaTypeDefinition } from 'sanity'

// Import your custom schemas
import review from './review'
import category from './category'

// (Optional) If you want to keep the default blog stuff, leave them. 
// But for this project, we only need these two:
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [review, category],
}