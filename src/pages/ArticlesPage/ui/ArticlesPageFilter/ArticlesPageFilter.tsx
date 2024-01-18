import { type FC, memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesPageFilter.module.scss'
import {
    type ArticleSortField,
    ArticleSortSelector,
    ArticleTypeTabs,
    type ArticleView,
    ArticleViewSelector
    , type ArticleType
} from '@/ourEntities/Article'
import { articlesPageActions } from '../../model/slices/articlePageSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { Card } from '@/shared/ui/Card/Card'
import { Input } from '@/shared/ui/Input/Input'
import { type SortOrder } from '@/shared/types'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'

interface ArticlesPageFilterProps {
    className?: string
}

export const ArticlesPageFilter: FC<ArticlesPageFilterProps> = memo((props) => {
    const {
        className
    } = props

    const { t } = useTranslation('article')
    const view = useSelector(getArticlesPageView)
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)

    const dispatch = useAppDispatch()

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 1000)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search))
        dispatch(articlesPageActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    return (
        <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    )
})
