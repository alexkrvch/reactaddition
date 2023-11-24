import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import { BugButton } from 'app/providers/ErrorBoundary'

const MainPage = (): ReactElement => {
    const { t } = useTranslation('main')

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
        </div>
    )
}

export default MainPage
