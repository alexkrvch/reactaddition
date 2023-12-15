import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleList } from 'ourEntities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getArticles } from '../../model/slices/articlePageSlice'
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { Text } from 'shared/ui/Text/Text'

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo((props) => {
    const {
        className
    } = props

    const { t } = useTranslation()

    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)

    const view = useSelector(getArticlesPageView)

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    if (error) {
        return (
            <div className={classNames('', {}, [className])}>
                <Text title={t('Ошибка загрузки статей')} />
            </div>
        )
    }

    return (
        <ArticleList
            isLoading={isLoading}
            articles={articles}
            view={view}
            className={className}
        />
    )
})
