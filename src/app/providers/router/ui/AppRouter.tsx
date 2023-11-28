import React, { Suspense, useMemo, memo, type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'ourEntities/User'

export const AppRouter: FC = memo(() => {
    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            return !(route.authOnly && !isAuth)
        })
    }, [isAuth])

    return (
        <Routes>
            {routes.map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className='page-wrapper'>{element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    )
})
