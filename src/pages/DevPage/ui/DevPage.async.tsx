import { lazy } from 'react'

export const DevPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error - for some time
    setTimeout(() => { resolve(import('./DevPage')) }, 1500)
}))
