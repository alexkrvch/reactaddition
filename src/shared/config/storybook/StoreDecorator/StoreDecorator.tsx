import { type FC, type ReactNode } from 'react'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'
// TODO: fix it's later for storybook
// eslint-disable-next-line heikun-eslint-checker/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
// eslint-disable-next-line heikun-eslint-checker/public-api-imports
import { articleDetailsReducer } from '@/ourEntities/Article/model/slice/articleDetailsSlice'
// eslint-disable-next-line heikun-eslint-checker/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice'
// eslint-disable-next-line heikun-eslint-checker/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice'

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
