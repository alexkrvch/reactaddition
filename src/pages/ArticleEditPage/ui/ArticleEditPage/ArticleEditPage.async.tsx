import { lazy } from 'react'

export const ArticleEditPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error - for some time
    setTimeout(() => { resolve(import('./ArticleEditPage')) }, 1500)
}))
