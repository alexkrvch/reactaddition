import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { Text } from 'shared/ui/Text/Text'

const meta = {
    title: 'shared/Card',
    component: Card,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {
        children: <Text title={'Some title'} text={'Some text'} />
    }
}

export const PrimaryDark: Story = {
    args: {
        children: <Text title={'Some title'} text={'Some text'} />
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOrange: Story = {
    args: {
        children: <Text title={'Some title'} text={'Some text'} />
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}
