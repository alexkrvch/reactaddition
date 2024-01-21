import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import { Page } from '@/widgets/Page/Page'
import { RatingCard } from '@/ourEntities/Rating'

const MainPage = (): ReactElement => {
    const { t } = useTranslation('main')

    return (
        <Page>
            {t('Главная страница')}
            <RatingCard title={'Оцените текст'} feedbackTitle={'Оставьте отзыв'} hasFeedback={true}/>
        </Page>
    )
}

export default MainPage
