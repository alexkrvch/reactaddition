import { type FC, useState, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'ourEntities/User'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation()
    const [isOpenModal, setIsOpenAM] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsOpenAM(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsOpenAM(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (<div className={classNames(cls.navBar, {}, [className])}>
            <div className={cls.logo}>
                {t('WebArcticFox')}
            </div>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onLogout}
            >
                {t('Выйти')}
            </Button>
        </div>)
    }

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
