import { type ButtonHTMLAttributes, type FC, memo, type ReactNode } from 'react'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    OUTLINE_RED = 'outline_red'
}

export enum ButtonSize {
    L = 'size_l',
    M = 'size_m',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
    fullWidth?: boolean
}

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        fullWidth = false,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth
    }

    return (
        <button
            type={'button'}
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    )
})
