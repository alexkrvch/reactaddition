import { lazy } from 'react'

export const ArticlesPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error - for some time
    setTimeout(() => { resolve(import('./ArticlesPage')) }, 1500)
}))
