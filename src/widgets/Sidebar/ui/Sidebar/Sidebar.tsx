import { type FC, useState, useMemo, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { type SidebarItemType } from '../../model/types/sidebar'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { VStack } from 'shared/ui/Stack/VStack/VStack'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = (): void => {
        setCollapsed(prev => !prev)
    }
    const sidebarItemList = useSelector(getSidebarItems)
    const itemsList = useMemo(() => (
        sidebarItemList.map((item: SidebarItemType) => (
            <SidebarItem
                key={item.id}
                item={item}
                collapsed={collapsed}
            />
        ))
    ), [sidebarItemList, collapsed])

    return (
        <menu
            data-testid='sidebar'
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className])}
        >
            <VStack gap={'8'} className={cls.menu}>
                { itemsList }
            </VStack>
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
        </menu>
    )
})
