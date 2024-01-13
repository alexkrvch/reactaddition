import { type FC, type HTMLAttributeAnchorTarget, memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { useTranslation } from 'react-i18next'
import { Virtuoso } from 'react-virtuoso'
import { PAGE_ID } from 'widgets/Page/Page'
import { ArticleView } from '../../model/consts/consts'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    virtualized?: boolean
}

const getSkeletons = (view: ArticleView): ReactNode => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                key={index}
                view={view}
                className={cls.card}
            />
        ))
}

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
        virtualized = true
    } = props

    const { t } = useTranslation('article')

    const renderArticle = (article: Article): ReactNode => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                className={cls.card}
                view={view}
                target={target}
            />
        )
    }

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {t('Статей по данному запросу не найдено')}
            </div>
        )
    }

    const isBig = view === ArticleView.BIG

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {isBig && virtualized && <Virtuoso
                style={{ height: 500 }}
                customScrollParent={document.getElementById(PAGE_ID) as HTMLElement}
                data={articles}
                itemContent={(_, article) => (
                    renderArticle(article)
                )}
            />}

            {isBig && virtualized && articles.length > 0
                ? articles.map(renderArticle)
                : null
            }

            {!isBig && articles.length > 0
                ? articles.map(renderArticle)
                : null
            }

            {isLoading && getSkeletons(view)}
        </div>
    )
})
