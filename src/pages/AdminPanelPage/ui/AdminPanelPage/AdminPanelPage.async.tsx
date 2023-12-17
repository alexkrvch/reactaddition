import { lazy } from 'react'

export default {}
export const AdminPanelPageAsync =
    lazy(async () => await import('./AdminPanelPage'))
