import { rtkApi } from '@/shared/api/rtkApi'
import { type Article } from '@/ourEntities/Article'

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        console.log('test');
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: 'articles',
                params: {
                    _limit: limit
                }
            })
        })
    })
})

export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery
