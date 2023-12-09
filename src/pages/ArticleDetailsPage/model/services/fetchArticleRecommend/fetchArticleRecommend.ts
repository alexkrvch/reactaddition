import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'ourEntities/Article'

export const fetchArticleRecommend =

    createAsyncThunk<
    Article[],
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    void,
    ThunkConfig<string>
    >(
        'articlesDetailsPage/fetchArticleRecommend',
        async (_, thunkAPI) => {
            const {
                extra,
                rejectWithValue
            } = thunkAPI

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: 4
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
