import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/ourEntities/Rating'
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/ourEntities/User'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

export interface ProfileRatingProps {
    className?: string
    profileId: string
}

const ProfileRating: FC<ProfileRatingProps> = memo((props) => {
    const {
        className,
        profileId
    } = props

    const { t } = useTranslation('article')
    const userData = useSelector(getUserAuthData)
    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? ''
    })

    const [rateArticleMutation] = useRateProfile()

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                profileId,
                rate: starsCount,
                feedback
            })
        } catch (e) {
            console.log(e)
        }
    }, [profileId, rateArticleMutation, userData?.id])

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
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте свой отзыв о профиле, это поможет улучшить качество')}
            hasFeedback={true}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    )
})

export default ProfileRating
