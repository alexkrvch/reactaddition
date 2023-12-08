import { type FC, memo, useMemo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleSortSelector.module.scss'
import { Select, type SelectOption } from 'shared/ui/Select/Select'
import { ArticleSortField } from 'ourEntities/Article/model/types/article'
import { type SortOrder } from 'shared/types'

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

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убываниваю')
        }
    ], [t])

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
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

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as ArticleSortField)
    }, [onChangeSort])

    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder)
    }, [onChangeOrder])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать ПО')}
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={changeOrderHandler}
            />
        </div>
    )
})
