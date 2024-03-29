import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Text } from '@/shared/ui/Text/Text'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { VStack } from '@/shared/ui/Stack'
import { RoutePath } from '@/shared/const/router'

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const {
        className,
        comment,
        isLoading
    } = props

    if (isLoading) {
        return (
            <VStack gap={'8'} max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border={'50%'}
                    />
                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.username}
                    />
                </div>
                <Skeleton
                    height={50}
                    width={'100%'}
                    className={cls.text}
                />
            </VStack>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <VStack gap={'8'} max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar}/> : null}
                <Text className={cls.username} title={comment.user.username}/>
            </AppLink>
            <Text className={cls.text} text={comment.text}/>
        </VStack>
    )
})
