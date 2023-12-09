import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article, ArticleType } from 'ourEntities/Article'
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType
} from '../../selectors/articlesPageSelectors'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'

interface FetchArticlesListProps {
    replace?: boolean
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

            const limit = getArticlesPageLimit(getState())

            const sort = getArticlesPageSort(getState())
            const order = getArticlesPageOrder(getState())
            const search = getArticlesPageSearch(getState())
            const type = getArticlesPageType(getState())

            const page = getArticlesPageNum(getState())

            try {
                addQueryParams({
                    sort, order, search, type
                })

                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type
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
