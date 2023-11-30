import { type FC, type SVGProps } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'
import DevIcon from 'shared/assets/icons/development.svg'

export interface SidebarItemType {
    id: number
    path: string
    text: string
    Icon: FC<SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        id: 1,
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная'
    },
    {
        id: 2,
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте | меню'
    },
    {
        id: 3,
        path: RoutePath.development,
        Icon: DevIcon,
        text: 'Разработка'
    },
    {
        id: 4,
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true
    },
    {
        id: 5,
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true
    }
]
