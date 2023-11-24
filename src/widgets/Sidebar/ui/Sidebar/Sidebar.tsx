import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import DevIcon from 'shared/assets/icons/development.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const onToggle = (): void => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className])}
        >
            <div className={cls.menu}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.menuItem}
                >
                    <div className={cls.link}>
                        <MainIcon />
                        <span>{t('Главная')}</span>
                    </div>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.RED}
                    to={RoutePath.about}
                    className={cls.menuItem}>
                    <div className={cls.link}>
                        <AboutIcon />
                        <span>{t('О сайте | меню')}</span>
                    </div>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.development}
                    className={cls.menuItem}
                >
                    <div className={cls.link}>
                        <DevIcon />
                        <span>{t('Development')}</span>
                    </div>
                </AppLink>
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
}
