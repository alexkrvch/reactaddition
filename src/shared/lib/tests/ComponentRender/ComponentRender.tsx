import { type ReactNode } from 'react'
import { render, type RenderResult } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '@/shared/config/i18n/i18nForTests'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'

export interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function ComponentRender (
    component: ReactNode,
    options: ComponentRenderOptions = {}
): RenderResult {
    const {
        route = '/',
        initialState,
        asyncReducers
    } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
