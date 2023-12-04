import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from 'ourEntities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Comment } from 'ourEntities/Comment'
import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors'
import { getArticleDetailsData } from 'ourEntities/Article'

export const sendComment =
    createAsyncThunk<
    Comment,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    void,
    ThunkConfig<string>
    >(
        'addCommentForm/sendComment',
        async (authData, thunkAPI) => {
            const {
                extra,
                rejectWithValue,
                getState
            } = thunkAPI

            const userData = getUserAuthData(getState())
            const text = getAddCommentFormText(getState())
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

                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))

                return response.data
            } catch (e) {
                return rejectWithValue('error')
            }
        }
    )
