import { combineReducers } from '@reduxjs/toolkit'
import { type ArticleDetailsPageSchema } from '../types'
import { articleDetailsRecommendReducer } from '../slices/articleDetailsRecommendSlice'
import { articleDetailsCommentsReducer } from '../slices/articleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommend: articleDetailsRecommendReducer,
    comments: articleDetailsCommentsReducer
})
