import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageInit } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage =
    createAsyncThunk<
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    void,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    void,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (_, thunkAPI) => {
            const {
                getState,
                dispatch
            } = thunkAPI

            const init = getArticlesPageInit(getState())

            if (!init) {
                dispatch(articlesPageActions.initState())
                dispatch(fetchArticlesList({
                    page: 1
                }))
            }
        }
    )
