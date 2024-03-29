import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { StoreProvider } from '@/app/providers/StoreProvider'

const meta = {
    title: 'pages/articleDetails/ArticleDetailsComments',
    component: ArticleDetailsComments,
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        id: '1'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ArticleDetailsComments>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
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
