import type { RouteProps } from 'react-router-dom'
import type { UserRole } from '@/ourEntities/User'

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}
