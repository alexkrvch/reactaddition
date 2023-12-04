import { type FC, type SVGProps } from 'react'

export interface SidebarItemType {
    id: number
    path: string
    text: string
    Icon: FC<SVGProps<SVGSVGElement>>
    authOnly?: boolean
}
