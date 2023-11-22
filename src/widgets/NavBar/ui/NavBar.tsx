import { type FC, useState, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'
import { LoginModal } from 'features/AuthByUsername'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation()
    const [isOpenModal, setIsOpenAM] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsOpenAM(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsOpenAM(true)
    }, [])

    return (
        <div className={classNames(cls.navBar, {}, [className])}>
            <div className={cls.logo}>
                {t('WebArcticFox')}
            </div>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>
            <Portal>
                <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />
            </Portal>
        </div>
    )
}
