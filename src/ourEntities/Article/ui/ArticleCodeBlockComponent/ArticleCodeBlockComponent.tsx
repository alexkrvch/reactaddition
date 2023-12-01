import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
    className?: string
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo((props) => {
    const {
        className
    } = props

    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            Code block
        </div>
    )
})
