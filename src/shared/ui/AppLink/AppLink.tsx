import { type FC, memo, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
    BLACK = 'black'
}

interface AppLinkProps extends LinkProps {
    className?: string
    children: ReactNode
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
})
