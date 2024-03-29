import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Profile } from '@/ourEntities/Profile'

export const fetchProfileData =
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    createAsyncThunk<Profile, string, ThunkConfig<string>>(
        'profile/fetchProfileData',
        async (profileId, thunkAPI) => {
            const {
                extra,
                rejectWithValue
            } = thunkAPI

            try {
                const response = await extra.api.get<Profile>(`/profile/${profileId}`)

                if (!response.data) {
                    throw new Error()
                }

                return response.data
            } catch (e) {
                return rejectWithValue('error')
            }
        }
    )
