import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { Avatar } from './Avatar'
import DefaultAvatar from '../../assets/png/150x150.png'

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        src: DefaultAvatar,
        alt: 'Placeholder',
        title: 'Placeholder'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Avatar>

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

export const PrimaryLightWithSize: Story = {
    args: {
        size: 150
    }
}

export const PrimaryDarkWithSize: Story = {
    args: {
        size: 150
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        )
    ]
}
