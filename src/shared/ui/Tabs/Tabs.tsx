import { type FC, memo, type ReactNode, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import { Card, CardTheme } from 'shared/ui/Card/Card'

export interface TabItem {
    value: string
    content: ReactNode
}

interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}

export const Tabs: FC<TabsProps> = memo((props) => {
    const {
        className,
        tabs,
        onTabClick,
        value
    } = props

    const clickHandle = useCallback((tab: TabItem) => () => {
        onTabClick(tab)
    }, [onTabClick])

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs?.map(tab => (
                <Card
                    key={tab.value}
                    className={cls.tab}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
})
