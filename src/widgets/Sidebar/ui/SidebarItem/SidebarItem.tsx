import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type SidebarItemType } from '../../model/items'
import { classNames } from 'shared/lib/classNames/classNames'

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
