import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleCreatePage.module.scss'

interface ArticleCreatePageProps {
    className?: string
}

const ArticleCreatePage: FC<ArticleCreatePageProps> = memo((props) => {
    const {
        className
    } = props

    const { t } = useTranslation('article')

    return (
        <div className={classNames(cls.ArticleCreatePage, {}, [className])}>
            {t('Create page')}
        </div>
    )
})

export default ArticleCreatePage
