import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'

const App = () => {
    const { theme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={(<div>Download translate</div>)}>
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
