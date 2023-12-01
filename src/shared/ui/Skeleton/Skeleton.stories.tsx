import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        width: '100%',
        height: 200
    }
}

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 200
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const NormalOrange: Story = {
    args: {
        width: '100%',
        height: 200
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const CircleLight: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    }
}

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const CircleOrange: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}
