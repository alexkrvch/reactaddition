import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {
        placeholder: 'Ввведите текст',
        value: 'test text'
    }
}

export const PrimaryDark: Story = {
    args: {
        placeholder: 'Ввведите текст',
        value: 'test text'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOrange: Story = {
    args: {
        placeholder: 'Ввведите текст',
        value: 'test text'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}
