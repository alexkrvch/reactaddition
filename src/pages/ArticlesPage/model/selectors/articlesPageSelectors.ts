import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleSortField, ArticleView } from 'ourEntities/Article'
import { type SortOrder } from 'shared/types'

export const getArticlesPageIsLoading =
    (state: StateSchema): boolean => state.articlesPage?.isLoading || false

export const getArticlesPageError =
    (state: StateSchema): string => state.articlesPage?.error || ''

export const getArticlesPageView =
    (state: StateSchema): ArticleView => state.articlesPage?.view || ArticleView.SMALL

export const getArticlesPageLimit =
    (state: StateSchema): number => state.articlesPage?.limit || 9

export const getArticlesPageNum =
    (state: StateSchema): number => state.articlesPage?.page || 1

export const getArticlesPageHasMore =
    (state: StateSchema) => state.articlesPage?.hasMore

export const getArticlesPageInit =
    (state: StateSchema): boolean => state.articlesPage?._init || false

export const getArticlesPageOrder =
    (state: StateSchema): SortOrder => state.articlesPage?.order || 'asc'

export const getArticlesPageSort =
    (state: StateSchema): ArticleSortField => state.articlesPage?.sort || ArticleSortField.CREATED

export const getArticlesPageSearch =
    (state: StateSchema): string => state.articlesPage?.search || ''
