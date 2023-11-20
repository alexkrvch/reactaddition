import { type FC, useState, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation()
    const [isOpenAM, setIsOpenAM] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsOpenAM((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.navBar, {}, [className])}>
            <div className={cls.logo}>
                {t('WebArcticFox')}
            </div>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Portal>
                <Modal isOpen={isOpenAM} onClose={onToggleModal}>
                    <p>MODAL</p>
                </Modal>
            </Portal>
        </div>
    )
}
