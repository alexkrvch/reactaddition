import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        comments: [
            {
                id: '1',
                text: 'Hello world',
                user: { id: '1', username: 'Valera' }
            },
            {
                id: '2',
                text: 'Hi, its Dmitry',
                user: { id: '2', username: 'Dmitry' }
            }
        ]
    },
    tags: ['autodocs']
} satisfies Meta<typeof CommentList>

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

export const PrimaryLightLoading: Story = {
    args: { isLoading: true }
}

export const PrimaryDarkLoading: Story = {
    args: { isLoading: true },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOrangeLoading: Story = {
    args: { isLoading: true },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}
