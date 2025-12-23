import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Top Item: Your Reviews
      S.documentTypeListItem('review').title('Product Reviews'),
      
      // Second Item: Categories
      S.documentTypeListItem('category').title('Categories'),
      
      S.divider(),
      
      // Catch-all: Show anything else that might be defined
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['review', 'category'].includes(item.getId()!),
      ),
    ])