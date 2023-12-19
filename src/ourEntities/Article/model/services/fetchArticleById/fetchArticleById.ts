import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from '../../types/article'

export const fetchArticleById =
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
        'articleDetails/fetchArticleById',
        async (articleId, thunkAPI) => {
            const {
                extra,
                rejectWithValue
            } = thunkAPI

            try {
                const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                    params: {
                        _expand: 'user'
                    }
                })

                if (!response.data) {
                    throw new Error()
                }

                return response.data
            } catch (e) {
                return rejectWithValue('error')
            }
        }
    )
