import { type FC, memo } from 'react'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { Card } from '@/shared/ui/Card/Card'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { ArticleView } from '../../model/consts/consts'

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo((props) => {
    const {
        className,
        view
    } = props

    const mods: Mods = {}

    if (view === ArticleView.BIG) {
        return (
            <div
                className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton
                            width={30}
                            height={30}
                            border={'50%'}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.username}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton
                        width={250}
                        height={24}
                        className={cls.title}
                    />
                    <Skeleton
                        className={cls.img}
                        width={'100%'}
                        height={200}
                    />
                    <div className={cls.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton
                        className={cls.img}
                        width={200}
                        height={200}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton
                    width={150}
                    height={24}
                    className={cls.title}
                />
            </Card>
        </div>
    )
})
