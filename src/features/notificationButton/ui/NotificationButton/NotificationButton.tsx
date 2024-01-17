import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'ourEntities/Notification'
import { Popover } from 'shared/ui/Popups'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
    const {
        className
    } = props

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction={'bottomLeft'}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted={true} />
                </Button>
            )}>
            <NotificationList className={cls.notifications} />
        </Popover>
    )
})
