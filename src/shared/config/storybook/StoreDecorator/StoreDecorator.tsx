import { type FC, type ReactNode } from 'react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'ourEntities/Profile'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'ourEntities/Article/model/slice/articleDetailsSlice'

interface ThemeDecoratorProps {
    children: ReactNode
    state: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer
}

export const StoreDecorator: FC<ThemeDecoratorProps> = (props) => {
    const {
        state,
        children,
        asyncReducers
    } = props

    return (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            {children}
        </StoreProvider>
    )
}
