import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import DevPage from './DevPage'

const meta = {
    title: 'pages/DevPage',
    component: DevPage,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof DevPage>

export default meta
type Story = StoryObj<typeof meta>

export const DevPageLight: Story = {
    args: {}
}

export const DevPageDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        )
    ]
}
