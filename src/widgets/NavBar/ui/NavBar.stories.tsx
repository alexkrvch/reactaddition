import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { NavBar } from './NavBar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'widget/NavBar',
    component: NavBar,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{ user: undefined }}>
                <Story />
            </StoreDecorator>
        )
    ]
}

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{ user: undefined }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const AuthLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{ user: { authData: { id: '10' } } }}>
                <Story />
            </StoreDecorator>
        )
    ]
}

export const AuthDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{ user: { authData: { id: '10' } } }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}
