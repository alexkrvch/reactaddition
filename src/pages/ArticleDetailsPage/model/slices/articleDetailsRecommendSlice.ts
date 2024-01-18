import {
    createEntityAdapter,
    createSlice, type PayloadAction
} from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { type ArticleDetailsRecommendSchema } from '../types/ArticleDetailsRecommendSchema'
import { type Article } from '@/ourEntities/Article'
import {
    fetchArticleRecommend
} from '../services/fetchArticleRecommend/fetchArticleRecommend'

const recommendAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticleRecommend = recommendAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommend || recommendAdapter.getInitialState()
)

const articleDetailsRecommendSlice = createSlice({
    name: 'articleDetailsRecommendSlice',
    initialState: recommendAdapter.getInitialState<ArticleDetailsRecommendSchema>({
        isLoading: false,
        error: '',
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommend.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleRecommend.fulfilled, (
                state,
                action: PayloadAction<Article[]>
            ) => {
                state.isLoading = false
                recommendAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleRecommend.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articleDetailsRecommendReducer } = articleDetailsRecommendSlice
