import { useSelector } from 'react-redux'
import { getUserAuthData, getUserRoles, type UserRole } from '@/ourEntities/User'
import { Navigate } from 'react-router-dom'
import { useMemo, type ReactNode } from 'react'
import { RoutePath } from '@/shared/const/router'

interface RequireAuthProps {
    children: ReactNode
    roles?: UserRole[]
}

export function RequireAuth (props: RequireAuthProps) {
    const {
        children,
        roles
    } = props

    const auth = useSelector(getUserAuthData)
    const userRoles = useSelector(getUserRoles)

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole)
            return hasRole
        })
    }, [userRoles, roles])

    if (!auth) {
        return <Navigate to={RoutePath.main} />
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} />
    }

    return children
}
