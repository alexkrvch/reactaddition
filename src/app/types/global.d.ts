declare module '*.scss' {
    type IClassNames = Record<string, string>
    const classNames: IClassNames
    export = classNames
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
    import type React from 'react'
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare const _IS_DEV_: boolean
declare const _API_: string
declare const _PROJECT_: 'storybook' | 'frontend' | 'jest'

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>
} : T

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
}
