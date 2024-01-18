import { type StateSchema } from '@/app/providers/StoreProvider'

export const getArticleRecommendIsLoading =
    (state: StateSchema): boolean => state.articleDetailsPage?.recommend?.isLoading || false

export const getArticleRecommendError =
    (state: StateSchema): string => state.articleDetailsPage?.recommend?.error || ''
