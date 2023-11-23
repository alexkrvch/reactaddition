import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type User } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername =
    createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
        'login/loginByUsername',
        async (authData, thunkAPI) => {
            try {
                const response = await axios.post<User>('http://localhost:8000/login', authData)

                if (!response.data) {
                    throw new Error('Empty response')
                }

                return response.data
            } catch (e) {
                return thunkAPI.rejectWithValue(i18n.t('Неправильный логин или пароль'))
            }
        }
    )
