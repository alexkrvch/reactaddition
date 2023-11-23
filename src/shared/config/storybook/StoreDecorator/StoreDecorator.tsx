import { type FC, type ReactNode } from 'react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

interface ThemeDecoratorProps {
    children: ReactNode
    state: DeepPartial<StateSchema>
}

export const StoreDecorator: FC<ThemeDecoratorProps> = ({ state, children }) => (
    <StoreProvider initialState={state}>
        {children}
    </StoreProvider>
)
