import React, { Suspense, memo, type FC, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { type AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { RequireAuth } from 'app/providers/router/ui/requireAuth'

export const AppRouter: FC = memo(() => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className='page-wrapper'>
                    {route.element}
                </div>
            </Suspense>
        )
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly
                    ? <RequireAuth>{element}</RequireAuth>
                    : element}
            />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
})
