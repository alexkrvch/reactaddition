import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Currency } from '../../model/types/currency'
import { ListBox } from 'shared/ui/ListBox/ListBox'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR }
]

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props

    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Укажите валюту')}
            className={classNames('', {}, [className])}
            readonly={readonly}
            label={t('Укажите валюту')}
        />
    )
})
