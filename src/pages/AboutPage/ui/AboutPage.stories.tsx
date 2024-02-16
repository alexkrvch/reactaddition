import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import AboutPage from './AboutPage'
import { StoreProvider } from '@/app/providers/StoreProvider'

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const AboutPageLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreProvider>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <Story/>
                </ThemeDecorator>
            </StoreProvider>
        )
    ]
}

export const AboutPageDark: Story = {
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

export const AboutPageOrange: Story = {
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
