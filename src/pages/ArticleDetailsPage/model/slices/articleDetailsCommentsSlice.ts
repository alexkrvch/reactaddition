import {
    createEntityAdapter,
    createSlice, type PayloadAction
} from '@reduxjs/toolkit'
import { type Comment } from '@/ourEntities/Comment'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import {
    fetchCommentsByArticleId
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: '',
        ids: [],
        entities: {}
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>
            ) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
