import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { Counter } from '@/ourEntities/Counter'

const AboutPage = (): ReactElement => {
    const { t } = useTranslation('about')

    return (
        <Page>
            {t('О сайте')}
            <Counter />
        </Page>
    )
}

export default AboutPage
