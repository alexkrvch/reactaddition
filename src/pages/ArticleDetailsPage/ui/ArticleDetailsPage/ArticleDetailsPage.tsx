import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'ourEntities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'ourEntities/Comment'
import cls from './ArticleDetailsPage.module.scss'
import {
    DynamicModuleLoader,
    type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    articleDetailsCommentsReducer,
    getArticleComments
} from '../../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import {
    getArticleCommentsIsLoading
} from 'pages/ArticleDetailsPage/model/selectors/comments'
import {
    fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {
        className
    } = props

    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)
    // const error = useSelector(getArticleCommentsError)

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames('', {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
