import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

export const fetchProfileData =
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    createAsyncThunk<Profile, void, ThunkConfig<string>>(
        'profile/fetchProfileData',
        async (_, thunkAPI) => {
            const {
                extra,
                rejectWithValue
            } = thunkAPI

            try {
                const response = await extra.api.get<Profile>('/profile')

                return response.data
            } catch (e) {
                return rejectWithValue('error')
            }
        }
    )
