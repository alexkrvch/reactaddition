import { createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from 'entities/User/model/types/user'
// import { type CounterSchema } from 'entities/Counter'

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
