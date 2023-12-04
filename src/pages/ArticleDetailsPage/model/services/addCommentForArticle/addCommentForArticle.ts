import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from 'ourEntities/User'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Comment } from 'ourEntities/Comment'
import { getArticleDetailsData } from 'ourEntities/Article'
import {
    fetchCommentsByArticleId
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const sendCommentForArticle =
    createAsyncThunk<
    Comment,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    string,
    ThunkConfig<string>
    >(
        'articleDetails/sendCommentForArticle',
        async (text, thunkAPI) => {
            const {
                extra,
                rejectWithValue,
                dispatch,
                getState
            } = thunkAPI

            const userData = getUserAuthData(getState())
            const article = getArticleDetailsData(getState())

            if (!userData || !text || !article) {
                return rejectWithValue('no data')
            }

            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article.id,
                    userId: userData.id,
                    text
                })

                if (!response.data) {
                    throw new Error('Empty response')
                }

                dispatch(fetchCommentsByArticleId(article.id))

                return response.data
            } catch (e) {
                return rejectWithValue('error')
            }
        }
    )
