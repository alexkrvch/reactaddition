import {
    type ChangeEvent,
    type FC,
    type InputHTMLAttributes,
    memo,
    useState,
    useEffect,
    useRef
} from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    type?: string
    autofocus?: boolean
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props

    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)
    const ref = useRef<HTMLInputElement>(null)

    const onBlur = (): void => {
        setIsFocused(false)
    }

    const onFocus = (): void => {
        setIsFocused(true)
    }

    const onSelect = (e: any): void => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autofocus])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    const mods: Mods = {
        [cls.readonly]: readonly
    }

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 8}px` }}
                    />
                )}
            </div>
        </div>
    )
})
