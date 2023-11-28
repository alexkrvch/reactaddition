import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile, ValidateProfileError } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData =
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
        'profile/updateProfileData',
        async (_, thunkAPI) => {
            const {
                extra,
                rejectWithValue,
                getState
            } = thunkAPI

            const formData = getProfileForm(getState())

            const errors = validateProfileData(formData)

            if (errors.length) {
                return rejectWithValue(errors)
            }

            try {
                const response = await extra.api.put<Profile>('/profile', formData)
                return response.data
            } catch (e) {
                return rejectWithValue([ValidateProfileError.SERVER_ERROR])
            }
        }
    )
