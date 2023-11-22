import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export function createReduxStore (initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
}
