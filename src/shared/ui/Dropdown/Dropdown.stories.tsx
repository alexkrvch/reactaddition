import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { Button } from '../Button/Button'

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        trigger: <Button>12345</Button>,
        items: [
            {
                id: 1,
                content: 'First'
            },
            {
                id: 2,
                content: 'Second'
            },
            {
                id: 3,
                content: 'Third'
            }
        ]
    },
    tags: ['autodocs']
} satisfies Meta<typeof Dropdown>

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
