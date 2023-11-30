import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const {
        className
    } = props

    const { t } = useTranslation('article')

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            Articles page
        </div>
    )
}

export default memo(ArticlesPage)
