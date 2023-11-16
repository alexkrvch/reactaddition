import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.navBar, {}, [className])}>
            <div className={cls.logo}>
                WebArcticFox
            </div>
            <div className={cls.menu}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.menuItem}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'} className={cls.menuItem}>
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}
