import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const {
        className
    } = props

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            111
        </div>
    )
}

export default memo(ArticlesPage)
