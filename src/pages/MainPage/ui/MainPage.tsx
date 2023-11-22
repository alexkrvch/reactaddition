import { useTranslation } from 'react-i18next'
import { useState, type ReactElement } from 'react'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Input } from 'shared/ui/Input/Input'

const MainPage = (): ReactElement => {
    const { t } = useTranslation('main')
    const [value, setValue] = useState('')

    const onChange = (val: string): void => {
        setValue(val)
    }

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
            <Input value={value} onChange={onChange} placeholder={'Введи логин'} />
        </div>
    )
}

export default MainPage
