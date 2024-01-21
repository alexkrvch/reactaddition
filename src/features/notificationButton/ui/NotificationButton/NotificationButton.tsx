import { type FC, memo, useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import { NotificationList } from '@/ourEntities/Notification'
import { Popover } from '@/shared/ui/Popups'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { BrowserView, MobileView } from 'react-device-detect'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
    const {
        className
    } = props

    const [isOpen, setIsOpen] = useState(false)
    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted={true}/>
        </Button>
    )

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction={'bottomLeft'}
                    trigger={trigger}>
                    <NotificationList className={cls.notifications}/>
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList/>
                </Drawer>
            </MobileView>
        </>
    )
})
