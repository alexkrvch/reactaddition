import { type FC, memo, useCallback } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleListItem.module.scss'
import {
    type Article,
    ArticleBlockType,
    type ArticleTextBlock,
    ArticleView
} from '../../model/types/article'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { Card } from 'shared/ui/Card/Card'
import { useHover } from 'shared/lib/hooks/useHover/useHover'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

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
    const [isHover, bindHover] = useHover()
    const navigate = useNavigate()

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article + article.id)
    }, [article.id, navigate])

    const types = <Text
        text={article.type.join(', ')}
        className={cls.types}
    />

    const views = (
        <>
            <Text
                text={String(article.views)}
                className={cls.views}
            />
            <Icon Svg={EyeIcon} />
        </>
    )

    const mods: Mods = {
        [cls.hover]: isHover
    }

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock
        return (
            <div
                {...bindHover}
                className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar
                            size={30}
                            src={article.user.avatar}
                        />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text
                            text={article.createdAt}
                            className={cls.date}
                        />
                    </div>
                    <Text
                        title={article.title}
                        className={cls.title}
                    />
                    {types}
                    <img
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onOpenArticle}
                        >
                            {t('Читать далее')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div
            {...bindHover}
            className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}
        >
            <Card className={cls.card} onClick={onOpenArticle}>
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
                    {types}
                    {views}
                </div>
                <Text
                    text={article.title}
                    className={cls.title}
                />
            </Card>
        </div>
    )
})
