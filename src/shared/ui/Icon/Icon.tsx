import { type FC, memo, type SVGProps } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
    className?: string
    Svg: FC<SVGProps<SVGSVGElement>>
    inverted?: boolean
}

export const Icon: FC<IconProps> = memo((props) => {
    const {
        className,
        Svg,
        inverted
    } = props

    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
    )
})
