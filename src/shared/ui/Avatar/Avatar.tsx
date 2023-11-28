import { useMemo, type FC, type CSSProperties } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    title?: string
    alt?: string
    size?: number
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className,
        title = '',
        alt = '',
        src,
        size
    } = props

    const mods: Mods = {}

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100
        }
    }, [size])

    return (
        <img
            className={classNames(cls.Avatar, mods, [className])}
            src={src}
            title={title}
            alt={alt}
            style={styles}
        />
    )
}
