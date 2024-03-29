import type { Meta, StoryObj } from '@storybook/react'
import { ArticleSortSelector } from './ArticleSortSelector'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'

import { ArticleSortField } from '../../model/consts/consts'

const meta = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        onChangeSort: () => {},
        onChangeOrder: () => {},
        sort: ArticleSortField.CREATED,
        order: 'asc'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ArticleSortSelector>

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
