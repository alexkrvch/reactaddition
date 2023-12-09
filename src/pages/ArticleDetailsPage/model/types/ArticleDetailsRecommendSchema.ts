import { type EntityState } from '@reduxjs/toolkit'
import { type Article } from 'ourEntities/Article'

export interface ArticleDetailsRecommendSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
}
