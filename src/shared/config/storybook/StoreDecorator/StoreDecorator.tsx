import { type FC, type ReactNode } from 'react'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '@/ourEntities/Article/testing'
import { addCommentFormReducer } from '@/features/addCommentForm/testing'
import { profileReducer } from '@/features/editableProfileCard/testing'

interface ThemeDecoratorProps {
    children: ReactNode
    state: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer
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
