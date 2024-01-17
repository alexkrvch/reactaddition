import { type FC, memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Portal } from 'shared/ui/Portal/Portal'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'ourEntities/User'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { HStack } from 'shared/ui/Stack'
import { NotificationButton } from 'features/notificationButton'
import { AvatarDropdown } from 'features/avatarDropdown'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const [isOpenModal, setIsOpenAM] = useState(false)
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsOpenAM(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsOpenAM(true)
    }, [])

    if (authData) {
        return (<header className={classNames(cls.navBar, {}, [className])}>
            <Text
                className={cls.appName}
                title={t('WebArcticFox')}
                theme={TextTheme.INVERTED}
            />
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={RoutePath.article_create}
                className={cls.createBtn}
            >
                {t('Создать статью')}
            </AppLink>
            <HStack gap={'16'} className={cls.actions}>
                <NotificationButton/>
                <AvatarDropdown/>
            </HStack>
        </header>)
    }

    return (
        <header className={classNames(cls.navBar, {}, [className])}>
            <Text className={cls.appName} title={t('WebArcticFox')}/>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>

            {isOpenModal &&
                <Portal>
                    <LoginModal isOpen={isOpenModal} onClose={onCloseModal}/>
                </Portal>
            }
        </header>
    )
})
