import { lazy } from 'react'

export const DevPageAsync =
    lazy(async () => await import('./DevPage'))
