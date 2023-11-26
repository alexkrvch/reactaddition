import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile, type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: false,
    error: undefined,
    data: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<Profile>) => {
            // state = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
