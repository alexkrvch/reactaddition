import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'
import { Sidebar } from 'widgets/Sidebar'
import { type ReactNode, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const App = (): ReactNode => {
    const { theme } = useTheme()
    const { t } = useTranslation()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={(<div>{t('Загрузка перевода')}</div>)}>
                <NavBar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
