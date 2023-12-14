import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Page } from 'widgets/Page/Page'
import { ListBox } from 'shared/ui/ListBox/ListBox'
import { HStack } from 'shared/ui/Stack'

const DevPage = (): ReactElement => {
    const { t } = useTranslation('dev')

    return (
        <Page>
            <p>{t('Developer page for test some elements')}</p>
            <HStack gap={'16'}>
                <BugButton />
                <ListBox
                    defaultValue={'Выберите значение'}
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: '234', disabled: true },
                        { value: '3', content: '345' },
                        { value: '4', content: '456' }
                    ]}
                />
            </HStack>
        </Page>
    )
}

export default DevPage
