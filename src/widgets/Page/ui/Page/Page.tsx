import { type FC, memo, type MutableRefObject, type ReactNode, type UIEvent, useRef } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll/useInfinityScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getScrollSaveByPath, scrollSaveActions } from '@/features/ScrollSave'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const PAGE_ID = 'PAGE'

export const Page: FC<PageProps> = memo((props) => {
    const {
        className,
        children,
        onScrollEnd
    } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollSaveByPath(state, pathname)
    )

    useInfinityScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }))
    }, 500)

    return (
        <main
            className={classNames(cls.Page, {}, [className])}
            ref={wrapperRef}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
        </main>
    )
})
