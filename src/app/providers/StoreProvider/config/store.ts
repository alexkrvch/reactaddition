import {
    type CombinedState,
    configureStore,
    type Reducer,
    type ReducersMapObject,
    type AnyAction,
    type MiddlewareArray,
    type ThunkMiddleware
} from '@reduxjs/toolkit'
import { type ReducerManager, type StateSchema, type ThunkExtraArg } from './StateSchema'
import { counterReducer } from 'ourEntities/Counter'
import { userReducer } from 'ourEntities/User'
import { createReducerManager } from './reducerManager'
import { apiInstance } from 'shared/api/api'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { scrollSaveReducer } from 'features/ScrollSave'

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
): ToolkitStore<
    StateSchema,
    AnyAction,
    MiddlewareArray<[ThunkMiddleware<CombinedState<StateSchema>, AnyAction, ThunkExtraArg>]>
    > {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer
    }

    const extraArg: ThunkExtraArg = {
        api: apiInstance
    }

    const reducerManager: ReducerManager = createReducerManager(rootReducer)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: _IS_DEV_,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        })
    })

    // @ts-expect-error ignore for some time
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
