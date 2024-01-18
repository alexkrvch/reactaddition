import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { action } from '@storybook/addon-actions'

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        tabs: [
            {
                value: 'IT',
                content: 'IT'
            },
            {
                value: 'Politics',
                content: 'Politics'
            },
            {
                value: 'Business',
                content: 'Business'
            }
        ],
        onTabClick: action('onTabClick'),
        value: 'Politics'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Tabs>

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
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOrange: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}
