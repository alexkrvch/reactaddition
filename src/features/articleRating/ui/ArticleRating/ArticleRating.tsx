import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/ourEntities/Rating'
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/ourEntities/User'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating: FC<ArticleRatingProps> = memo((props) => {
    const {
        className,
        articleId
    } = props

    const { t } = useTranslation('article')
    const userData = useSelector(getUserAuthData)
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? ''
    })

    const [rateArticleMutation] = useRateArticle()

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback
            })
        } catch (e) {
            console.log(e)
        }
    }, [articleId, rateArticleMutation, userData?.id])

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback)
    }, [handleRateArticle])

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount)
    }, [handleRateArticle])

    if (isLoading) {
        return <Skeleton width={'100%'} height={120} />
    }

    const rating = data?.[0]

    return (
        <RatingCard
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback={true}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    )
})

export default ArticleRating
