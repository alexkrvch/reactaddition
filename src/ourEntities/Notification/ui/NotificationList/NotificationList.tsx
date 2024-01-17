import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotificationList.module.scss'
import { useGetNotifications } from '../../api/notificationApi'
import { VStack } from 'shared/ui/Stack'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface NotificationListProps {
    className?: string
}

export const NotificationList: FC<NotificationListProps> = memo((props) => {
    const {
        className
    } = props

    const { data, isLoading } = useGetNotifications(null, {
        pollingInterval: 5000
    })

    if (isLoading) {
        return (
            <VStack
                gap={'16'}
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width={'100%'} border={'8px'} height={'80px'}/>
                <Skeleton width={'100%'} border={'8px'} height={'80px'}/>
                <Skeleton width={'100%'} border={'8px'} height={'80px'}/>
            </VStack>
        )
    }

    return (
        <VStack
            gap={'16'}
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item}/>
            ))}
        </VStack>
    )
})
