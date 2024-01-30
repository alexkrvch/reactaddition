import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        to: '/'
    },
    tags: ['autodocs']
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {
        children: 'Link text',
        theme: AppLinkTheme.PRIMARY
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'Link text',
        theme: AppLinkTheme.PRIMARY
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
        children: 'Link text',
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const SecondaryLight: Story = {
    args: {
        children: 'Link text',
        theme: AppLinkTheme.SECONDARY
    }
}

export const SecondaryDark: Story = {
    args: {
        children: 'Link text',
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const SecondaryOrange: Story = {
    args: {
        children: 'Link text',
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const Red: Story = {
    args: {
        children: 'Link text',
        theme: AppLinkTheme.RED
    }
}
