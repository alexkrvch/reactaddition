import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import { Page } from '@/widgets/Page'
import { Text } from '@/shared/ui/Text/Text'

const ForbiddenPage = (): ReactElement => {
    const { t } = useTranslation()

    return (
        <Page>
            <Text title={t('Доступ запрещен')} />
        </Page>
    )
}

export default ForbiddenPage
