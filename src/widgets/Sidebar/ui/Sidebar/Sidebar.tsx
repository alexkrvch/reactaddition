import { type FC, useState, useMemo, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItemsList, type SidebarItemType } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = (): void => {
        setCollapsed(prev => !prev)
    }

    const itemsList = useMemo(() => (
        SidebarItemsList.map((item: SidebarItemType) => (
            <SidebarItem
                key={item.id}
                item={item}
                collapsed={collapsed}
            />
        ))
    ), [collapsed])

    return (
        <div
            data-testid='sidebar'
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className])}
        >
            <div className={cls.menu}>
                { itemsList }
            </div>
            <Button
                className={cls.collapseBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square={true}
                size={ButtonSize.L}
            >
                { collapsed ? '>' : '<' }
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    )
})
