import { useMemo, type FC, memo, type ChangeEvent } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    readonly?: boolean
    onChange?: (value: string) => void
}

export const Select: FC<SelectProps> = memo((props) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly
    } = props

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option
                className={cls.option}
                key={opt.value}
                value={opt.value}
            >
                {opt.content}
            </option>
        ))
    }, [options])

    const mods: Mods = {}

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        if (onChange) {
            onChange(e.target.value)
        }
    }

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>{`${label}>`}</span>
            )}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    )
})
