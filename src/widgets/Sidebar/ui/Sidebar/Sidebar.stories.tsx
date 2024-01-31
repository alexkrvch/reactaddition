import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { Sidebar } from './Sidebar'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={
                {
                    user: {
                        authData: {}
                    }
                }}>
                <Story/>
            </StoreDecorator>
        )
    ]
}

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={
                {
                    user: {
                        authData: {}
                    }
                }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const Orange: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={
                {
                    user: {
                        authData: {}
                    }
                }}>
                <ThemeDecorator theme={Theme.ORANGE}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const NoAuth: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={
                {
                    user: {
                        authData: undefined
                    }
                }}>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const Auth: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={
                {
                    user: {
                        authData: {}
                    }
                }}>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}
