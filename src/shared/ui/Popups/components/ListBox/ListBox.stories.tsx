import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        defaultValue: 'Выберите значение',
        onChange: (value: string) => {
        },
        value: undefined,
        items: [
            { value: '1', content: '123' },
            { value: '2', content: '234', disabled: true },
            { value: '3', content: '345' },
            { value: '4', content: '456' }
        ]
    },
    tags: ['autodocs']
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {}
}

export const PrimaryDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOrange: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const PrimaryTopLeft: Story = {
    args: {
        direction: 'topLeft'
    }
}

export const PrimaryTopRight: Story = {
    args: {
        direction: 'topRight'
    }
}

export const PrimaryBottomLeft: Story = {
    args: {
        direction: 'bottomLeft'
    }
}

export const PrimaryBottomRight: Story = {
    args: {
        direction: 'bottomRight'
    }
}
