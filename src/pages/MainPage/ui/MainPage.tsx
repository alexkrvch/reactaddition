import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import { Page } from 'shared/ui/Page/Page'

const MainPage = (): ReactElement => {
    const { t } = useTranslation('main')

    return (
        <Page>
            {t('Главная страница')}
        </Page>
    )
}

export default MainPage
