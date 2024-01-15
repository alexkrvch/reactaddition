import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Comment } from '../../model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { VStack } from 'shared/ui/Stack'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const {
        className,
        isLoading,
        comments
    } = props

    const { t } = useTranslation('comments')

    if (isLoading) {
        return (
            <VStack gap={'16'} max className={classNames('', {}, [className])}>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
            </VStack>
        )
    }

    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t('Комментариев нет')}/>
            }
        </VStack>
    )
})
