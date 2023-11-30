import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { Select } from './Select'

const meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        label: 'Указажите значение',
        options: [
            { value: '123', content: 'Первый' },
            { value: '1234', content: 'Второй' },
            { value: '12345', content: 'Третий' }
        ]
    },
    tags: ['autodocs']
} satisfies Meta<typeof Select>

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
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOrange: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story />
            </ThemeDecorator>
        )
    ]
}
