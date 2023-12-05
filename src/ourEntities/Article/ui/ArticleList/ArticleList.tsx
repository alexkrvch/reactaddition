import { type FC, memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading
    } = props

    const { t } = useTranslation('article')

    const renderArticle = (article: Article): ReactNode => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
            />
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : t('Ошибка загрузку статей')
            }
        </div>
    )
})
