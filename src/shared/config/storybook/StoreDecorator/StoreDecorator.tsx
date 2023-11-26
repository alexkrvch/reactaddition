import { type FC, type ReactNode } from 'react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'ourEntities/Profile'

interface ThemeDecoratorProps {
    children: ReactNode
    state: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer
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
