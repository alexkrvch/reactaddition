import { type FC, memo, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Popover.module.scss'
import { Popover as HPopover } from '@headlessui/react'
import type { DropdownDirection } from '@/shared/types/ui'
import popupCls from '../../styles/popup.module.scss'

interface PopoverProps {
    className?: string
    trigger: ReactNode
    direction?: DropdownDirection
    children: ReactNode
}

export const Popover: FC<PopoverProps> = memo((props) => {
    const {
        className,
        direction = 'bottomLeft',
        trigger,
        children
    } = props

    const menuClasses = [popupCls[direction]]

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.Dropdown])}
        >
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    )
})
