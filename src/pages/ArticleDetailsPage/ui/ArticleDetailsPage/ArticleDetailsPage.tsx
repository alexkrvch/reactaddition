import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleDetails, ArticleList } from 'ourEntities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { CommentList } from 'ourEntities/Comment'
import cls from './ArticleDetailsPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AddCommentForm } from 'features/addCommentForm'
import { sendCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'widgets/Page/Page'
import { getArticleRecommend } from '../../model/slices/articleDetailsRecommendSlice'
import { getArticleRecommendIsLoading } from '../../model/selectors/recommend'
import { fetchArticleRecommend } from '../../model/services/fetchArticleRecommend/fetchArticleRecommend'
import { articleDetailsPageReducer } from '../../model/slices'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {
        className
    } = props

    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const recommend = useSelector(getArticleRecommend.selectAll)
    const recommendIsLoading = useSelector(getArticleRecommendIsLoading)

    const onSendComment = useCallback((text: string) => {
        dispatch(sendCommentForArticle(text))
    }, [dispatch])

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArticleRecommend())
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
            <Page className={classNames('', {}, [className])}>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onBackToList}
                >
                    {t('Вернуться к списку статей')}
                </Button>
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Рекомендуем')}
                />
                <ArticleList
                    articles={recommend}
                    isLoading={recommendIsLoading}
                    className={cls.recommend}
                    target={'_blank'}
                />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Комментарии')}
                />
                <AddCommentForm
                    onSendComment={onSendComment}
                />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
