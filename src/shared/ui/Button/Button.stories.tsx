import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {
        children: 'Test'
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const ClearLight: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Test'
    }
}

export const ClearDark: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const OutlineLight: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Test'
    }
}

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        )
    ]
}
