import { type FC, Fragment, type ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from '../Button/Button'

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps {
    items?: ListBoxItem[]
    className?: string
    value?: string
    defaultValue?: string
    onChange: (value: string) => void
}

export const ListBox: FC<ListBoxProps> = (props) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange
    } = props

    return (
        <HListBox
            as={'div'}
            className={classNames(cls.ListBox, {}, [className])}
            value={value}
            onChange={onChange}
        >
            <HListBox.Button
                className={cls.trigger}
            >
                <Button>
                    {value ?? defaultValue}
                </Button>
            </HListBox.Button>
            <HListBox.Options
                className={cls.options}
            >
                {items?.map((item) => (
                    <HListBox.Option
                        key={item.value}
                        value={item.value}
                        as={Fragment}
                        disabled={item.disabled}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(
                                    cls.item,
                                    {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled
                                    })}
                            >
                                {selected && '!!!'}
                                {item.content}
                            </li>
                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    )
}
