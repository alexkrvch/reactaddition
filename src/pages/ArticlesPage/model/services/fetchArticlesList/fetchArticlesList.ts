import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'ourEntities/Article'
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors'

interface FetchArticlesListProps {
    page?: number
}

export const fetchArticlesList =

    createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticlesList',
        async (args, thunkAPI) => {
            const {
                extra,
                rejectWithValue,
                getState
            } = thunkAPI

            const {
                page = 1
            } = args

            const limit = getArticlesPageLimit(getState())

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page
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
