import { lazy } from 'react'

export const ArticleCreatePageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error - for some time
    setTimeout(() => { resolve(import('./ArticleCreatePage')) }, 1500)
}))
