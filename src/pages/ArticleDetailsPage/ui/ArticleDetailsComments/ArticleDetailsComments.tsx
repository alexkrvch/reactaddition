import { type FC, memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextSize } from '@/shared/ui/Text/Text'
import { AddCommentForm } from '@/features/addCommentForm'
import { CommentList } from '@/ourEntities/Comment'
import { sendCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { useSelector } from 'react-redux'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
    fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { VStack } from '@/shared/ui/Stack'

interface ArticleDetailsCommentsProps {
    className?: string
    id: string | undefined
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo((props) => {
    const {
        className,
        id
    } = props
    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const onSendComment = useCallback((text: string) => {
        dispatch(sendCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)

    return (
        <VStack gap={'8'} max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Комментарии')}
            />
            <AddCommentForm
                onSendComment={onSendComment}
            />
            <CommentList
                isLoading={isLoading}
                comments={comments}
            />
        </VStack>
    )
})
