import { type FC, memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './AvatarDropdown.module.scss'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/ourEntities/User'
import { useDispatch, useSelector } from 'react-redux'
import { RoutePath } from '@/shared/const/router'

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props) => {
    const {
        className
    } = props

    const { t } = useTranslation()

    const authData = useSelector(getUserAuthData)
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const dispatch = useDispatch()

    const isAdminPanelAvailable = isAdmin || isManager
    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (!authData) {
        return null
    }

    return (

        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            trigger={<Avatar size={30} src={authData.avatar}/>}
            direction={'bottomLeft'}
            items={[
                ...(isAdminPanelAvailable
                    ? [{
                        id: 1,
                        content: t('Админка'),
                        href: RoutePath.admin_panel
                    }]
                    : []),
                {
                    id: 2,
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id
                },
                {
                    id: 3,
                    content: t('Выйти'),
                    onClick: onLogout
                }
            ]}
        />
    )
})
