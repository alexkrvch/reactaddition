import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/ourEntities/User'
import { type SidebarItemType } from '../../model/types/sidebar'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
    const {
        item,
        collapsed
    } = props

    const { t } = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.menuItem, { [cls.collapsed]: collapsed }, [])}
        >
            <div className={cls.link}>
                <item.Icon />
                <span>{t(item.text)}</span>
            </div>
        </AppLink>
    )
})
