import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.navBar, {}, [className])}>
            <div className={cls.logo}>
                {t('WebArcticFox')}
            </div>
            <div className={cls.menu}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.menuItem}>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'} className={cls.menuItem}>
                    {t('О сайте | меню')}
                </AppLink>
            </div>
        </div>
    )
}
