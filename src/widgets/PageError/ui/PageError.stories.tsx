import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { PageError } from './PageError'

const meta = {
    title: 'widget/PageError',
    component: PageError,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const Orange: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}
