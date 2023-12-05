import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleListItem.module.scss'
import { type Article, ArticleView } from '../../model/types/article'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const {
        className,
        article,
        view
    } = props

    const { t } = useTranslation()

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                {article.title}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    <Text
                        text={article.createdAt}
                        align={TextAlign.RIGHT}
                        className={cls.date}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    <Text
                        text={article.type.join(', ')}
                        className={cls.types}
                    />
                    <Text
                        text={String(article.views)}
                        className={cls.views}
                    />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text
                    text={article.title}
                    className={cls.title}
                />
            </div>
        </div>
    )
})
