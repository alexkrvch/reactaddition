import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticlesPageInit } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { type ArticleSortField } from '@/ourEntities/Article'
import { type SortOrder } from '@/shared/types'

export const initArticlesPage =
    createAsyncThunk<
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkAPI) => {
            const {
                getState,
                dispatch
            } = thunkAPI

            const init = getArticlesPageInit(getState())

            if (!init) {
                const orderFromUrl = searchParams.get('order') as SortOrder
                const sortFromUrl = searchParams.get('sort') as ArticleSortField
                const searchFromUrl = searchParams.get('search')

                if (orderFromUrl) {
                    dispatch(articlesPageActions.setOrder(orderFromUrl))
                }
                if (sortFromUrl) {
                    dispatch(articlesPageActions.setSort(sortFromUrl))
                }
                if (searchFromUrl) {
                    dispatch(articlesPageActions.setSearch(searchFromUrl))
                }

                dispatch(articlesPageActions.initState())
                dispatch(fetchArticlesList({}))
            }
        }
    )
