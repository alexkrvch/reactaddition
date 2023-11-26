import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'ourEntities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { type ThunkConfig } from 'app/providers/StoreProvider'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername =
    createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
        'login/loginByUsername',
        async (authData, thunkAPI) => {
            const {
                extra,
                dispatch,
                rejectWithValue
            } = thunkAPI

            try {
                const response = await extra.api.post<User>('/login', authData)

                if (!response.data) {
                    throw new Error('Empty response')
                }

                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
                dispatch(userActions.setAuthData(response.data))
                extra.navigate('/profile')
                return response.data
            } catch (e) {
                return rejectWithValue('error')
            }
        }
    )
