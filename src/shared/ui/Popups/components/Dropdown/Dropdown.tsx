import { type FC, Fragment, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Dropdown.module.scss'
import { Menu } from '@headlessui/react'
import { type DropdownDirection } from '@/shared/types/ui'
import { AppLink } from '../../../AppLink/AppLink'
import popupCls from '../../styles/popup.module.scss'

export interface DropdownItem {
    id: number
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
}

export const Dropdown: FC<DropdownProps> = (props) => {
    const {
        className,
        items,
        trigger,
        direction = 'bottomLeft'
    } = props

    const menuClasses = [popupCls[direction]]

    return (
        <Menu as={'div'} className={classNames(popupCls.Dropdown, {}, [className])}>
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map(item => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type={'button'}
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [popupCls.active]: active })}
                        >
                            {item.content}
                        </button>
                    )

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={item.id}>
                                {content}
                            </Menu.Item>
                        )
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={item.id}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
