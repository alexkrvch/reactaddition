import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AddCommentFormSchema } from 'features/addCommentForm'

const initialState: AddCommentFormSchema = {
    isLoading: false,
    error: '',
    text: ''
}

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state, action) => {
    //             state.error = undefined
    //             state.isLoading = true
    //         })
    //         .addCase(loginByUsername.fulfilled, (state, action) => {
    //             state.isLoading = false
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false
    //             state.error = action.payload
    //         })
    // }
})

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
