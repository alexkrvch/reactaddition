import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleDetails } from '@/ourEntities/Article'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page/Page'
import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { VStack } from '@/shared/ui/Stack'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'

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

    const { id } = useParams<{ id: string }>()

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <Page className={classNames('', {}, [className])}>
                <VStack gap={'16'} max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
