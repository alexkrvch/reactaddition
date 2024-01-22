import type { Meta, StoryObj } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { StoreProvider } from '@/app/providers/StoreProvider'

const meta = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof AvatarDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {}
}

export const PrimaryDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreProvider>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story/>
                </ThemeDecorator>
            </StoreProvider>
        )
    ]
}

export const PrimaryOrange: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreProvider>
                <ThemeDecorator theme={Theme.ORANGE}>
                    <Story/>
                </ThemeDecorator>
            </StoreProvider>
        )
    ]
}
