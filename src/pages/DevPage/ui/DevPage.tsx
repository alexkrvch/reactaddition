import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import { BugButton } from '@/app/providers/ErrorBoundary'
import { Page } from '@/widgets/Page'
import { ListBox } from '@/shared/ui/Popups/components/ListBox/ListBox'
import { HStack } from '@/shared/ui/Stack'

const DevPage = (): ReactElement => {
    const { t } = useTranslation('dev')

    return (
        <Page>
            <p>{t('Developer page for test some elements')}</p>
            <HStack gap={'16'}>
                <BugButton/>
                <ListBox
                    defaultValue={'Выберите значение'}
                    onChange={(value: string) => {
                    }}
                    value={undefined}
                    items={[
                        { value: '1', content: 'Heikun' },
                        { value: '2', content: 'Test', disabled: true },
                        { value: '3', content: 'List box' },
                        { value: '4', content: 'Only for test' }
                    ]}
                />
            </HStack>
        </Page>
    )
}

export default DevPage
