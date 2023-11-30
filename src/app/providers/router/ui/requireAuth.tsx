import { useSelector } from 'react-redux'
import { getUserAuthData } from 'ourEntities/User'
import { Navigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export function RequireAuth ({ children }: { children: JSX.Element }) {
    const auth = useSelector(getUserAuthData)

    if (!auth) {
        return <Navigate to={RoutePath.main} />
    }

    return children
}
