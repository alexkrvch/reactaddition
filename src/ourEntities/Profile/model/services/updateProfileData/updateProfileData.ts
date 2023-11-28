import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData =
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    createAsyncThunk<Profile, void, ThunkConfig<string>>(
        'profile/updateProfileData',
        async (_, thunkAPI) => {
            const {
                extra,
                rejectWithValue,
                getState
            } = thunkAPI

            const formData = getProfileForm(getState())

            try {
                const response = await extra.api.put<Profile>('/profile', formData)
                return response.data
            } catch (e) {
                return rejectWithValue('error')
            }
        }
    )
