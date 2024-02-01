import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const AboutPage = (): ReactElement => {
    const { t } = useTranslation('about')

    return (
        <Page>
            {t('О сайте')}
            {t('Place for text')}
        </Page>
    )
}

export default AboutPage
