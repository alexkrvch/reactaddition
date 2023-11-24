import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import { BugButton } from 'app/providers/ErrorBoundary'

const DevPage = (): ReactElement => {
    const { t } = useTranslation('dev')

    return (
        <div>
            <p>{t('Developer page for test some elements')}</p>
            <BugButton />
        </div>
    )
}

export default DevPage
