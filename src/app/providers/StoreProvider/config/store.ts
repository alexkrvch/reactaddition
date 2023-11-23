import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'ourEntities/Counter'
import { userReducer } from 'ourEntities/User'
import { loginReducer } from 'features/AuthByUsername'

export function createReduxStore (initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
}
