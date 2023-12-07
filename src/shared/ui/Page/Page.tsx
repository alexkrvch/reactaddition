import { type FC, memo, type MutableRefObject, type ReactNode, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page: FC<PageProps> = memo((props) => {
    const {
        className,
        children,
        onScrollEnd
    } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfinityScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    return (
        <section
            className={classNames(cls.Page, {}, [className])}
            ref={wrapperRef}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    )
})
