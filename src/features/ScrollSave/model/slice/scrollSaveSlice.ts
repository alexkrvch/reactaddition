import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ScrollSaveSchema } from '../types/scrollSaveSchema'

const initialState: ScrollSaveSchema = {
    scroll: {}
}

export const scrollSaveSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string, position: number }>
        ) => {
            state.scroll[payload.path] = payload.position
        }
    }
})

// Action creators are generated for each case reducer function
export const { actions: scrollSaveActions } = scrollSaveSlice
export const { reducer: scrollSaveReducer } = scrollSaveSlice
