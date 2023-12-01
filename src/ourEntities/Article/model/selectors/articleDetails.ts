import { type StateSchema } from 'app/providers/StoreProvider'
import { type Article } from '../types/article'

export const getArticleDetailsData =
    (state: StateSchema): Article | undefined => state.articleDetails?.data || undefined
export const getArticleDetailsIsLoading =
    (state: StateSchema): boolean => state.articleDetails?.isLoading || false
export const getArticleDetailsError =
    (state: StateSchema): string => state.articleDetails?.error || ''