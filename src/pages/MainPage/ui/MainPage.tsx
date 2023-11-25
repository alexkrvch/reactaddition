import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'

const MainPage = (): ReactElement => {
    const { t } = useTranslation('main')

    return (
        <div>
            {t('Главная страница')}
        </div>
    )
}

export default MainPage
