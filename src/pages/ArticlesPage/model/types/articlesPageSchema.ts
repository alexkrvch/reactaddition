import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleView, type ArticleSortField, type ArticleType } from '@/ourEntities/Article'
import { type SortOrder } from '@/shared/types'

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    view: ArticleView

    // pagination
    page: number
    limit: number
    hasMore: boolean

    // filters
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType

    _init: boolean
}
