import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'ourEntities/Article'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {
        className
    } = props

    const { t } = useTranslation('article')

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails />
        </div>
    )
}

export default memo(ArticleDetailsPage)
