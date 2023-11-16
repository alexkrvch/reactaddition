import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error for some time and test
    setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
}))
