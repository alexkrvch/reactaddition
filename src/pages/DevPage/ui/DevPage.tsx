import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Page } from 'shared/ui/Page/Page'

const DevPage = (): ReactElement => {
    const { t } = useTranslation('dev')

    return (
        <Page>
            <p>{t('Developer page for test some elements')}</p>
            <BugButton />
        </Page>
    )
}

export default DevPage
