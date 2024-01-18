import { type FC, memo, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleSortSelector.module.scss'
import { Select, type SelectOption } from '@/shared/ui/Select/Select'
import { type SortOrder } from '@/shared/types'
import { ArticleSortField } from '../../model/consts/consts'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo((props) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort
    } = props

    const { t } = useTranslation('article')

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убываниваю')
        }
    ], [t])

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('заголовку')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('количеству просмотров')
        }
    ], [t])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать ПО')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    )
})
