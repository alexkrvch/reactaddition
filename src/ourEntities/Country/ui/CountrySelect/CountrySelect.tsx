import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Country } from '../../model/types/country'
import { ListBox } from 'shared/ui/ListBox/ListBox'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Georgia, content: Country.Georgia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan }
]

export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props

    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Укажите страну')}
            className={classNames('', {}, [className])}
            readonly={readonly}
            direction={'topLeft'}
            label={t('Укажите страну')}
        />
    )
})
