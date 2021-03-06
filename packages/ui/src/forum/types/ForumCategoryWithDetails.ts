import { ForumCategoryWithDetailsFieldsFragment } from '@/forum/queries'

import { asBaseForumCategory, asForumCategory, ForumCategory } from './ForumCategory'

export interface ForumCategoryWithDetails extends Omit<ForumCategory, 'subcategories'> {
  subcategories: ForumCategory[]
}

export const asCategoryWithDetails = (fields: ForumCategoryWithDetailsFieldsFragment): ForumCategoryWithDetails => ({
  ...asBaseForumCategory(fields),
  subcategories: fields.forumcategoryparent?.map(asForumCategory) ?? [],
})
