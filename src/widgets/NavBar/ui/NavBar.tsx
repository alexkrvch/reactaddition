import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
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
                /
            </div>
        </div>
    )
}
