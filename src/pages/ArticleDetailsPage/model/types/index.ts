import { type ArticleDetailsRecommendSchema } from '../types/ArticleDetailsRecommendSchema'
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommend: ArticleDetailsRecommendSchema
}
