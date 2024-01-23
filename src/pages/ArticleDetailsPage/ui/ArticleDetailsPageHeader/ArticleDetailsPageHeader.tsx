import { type FC, memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/ourEntities/Article'
import { getCanEditArticle } from '../../model/selectors/article'
import { HStack } from '@/shared/ui/Stack'
import { RoutePath } from '@/shared/const/router'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo((props) => {
    const {
        className
    } = props

    const { t } = useTranslation('article')
    const navigate = useNavigate()
    const canEdit = useSelector(getCanEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit`)
    }, [article?.id, navigate])

    return (
        <HStack max justify={'between'} className={classNames('', {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Вернуться к списку статей')}
            </Button>

            {canEdit &&
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            }
        </HStack>
    )
})
