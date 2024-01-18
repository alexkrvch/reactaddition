import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/ourEntities/User'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import DevIcon from '@/shared/assets/icons/development.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import { type SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
            }
        ]

        if (userData) {
            sidebarItemsList.push(
                {
                    id: 4,
                    path: RoutePath.profile + userData.id,
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
            )
        }

        return sidebarItemsList
    }
)
