import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { NotFoundPage } from './NotFoundPage'
import { StoreProvider } from '@/app/providers/StoreProvider'

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const NotFoundPageLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreProvider>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <Story />
                </ThemeDecorator>
            </StoreProvider>
        )
    ]
}

export const NotFoundPageDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreProvider>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreProvider>
        )
    ]
}

export const NotFoundPageOrange: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreProvider>
                <ThemeDecorator theme={Theme.ORANGE}>
                    <Story />
                </ThemeDecorator>
            </StoreProvider>
        )
    ]
}
