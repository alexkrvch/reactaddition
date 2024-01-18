import './styles/index.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppRouter } from '@/app/providers/router'
import { NavBar } from '@/widgets/NavBar'
import { Sidebar } from '@/widgets/Sidebar'
import { type ReactNode, Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInit, userActions } from '@/ourEntities/User'

const App = (): ReactNode => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const init = useSelector(getUserInit)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={(<div>{t('Загрузка перевода')}</div>)}>
                <NavBar/>
                <div className="content-page">
                    <Sidebar/>
                    {init && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    )
}

export default App
