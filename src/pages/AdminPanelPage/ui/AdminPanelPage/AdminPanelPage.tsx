import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './AdminPanelPage.module.scss'
import { Page } from 'widgets/Page/Page'

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage: FC<AdminPanelPageProps> = memo((props) => {
    const {
        className
    } = props

    const { t } = useTranslation('panel')

    return (
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            {t('Admin page')}
        </Page>
    )
})

export default AdminPanelPage
