import { lazy } from 'react'

export const ArticleDetailsPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error - for some time
    setTimeout(() => { resolve(import('./ArticleDetailsPage')) }, 1500)
}))
