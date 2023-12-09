import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleCommentsIsLoading =
    (state: StateSchema): boolean => state.articleDetailsPage?.comments?.isLoading || false

export const getArticleCommentsError =
    (state: StateSchema): string => state.articleDetailsPage?.comments?.error || ''
