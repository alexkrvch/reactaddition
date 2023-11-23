import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{ loginForm: { username: '123', password: '123' } }}>
                <Story />
            </StoreDecorator>
        )
    ]
}

export const PrimaryDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{ loginForm: { username: '123', password: '123' } }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const PrimaryWithErrorLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                loginForm: {
                    username: '123',
                    password: '123',
                    error: 'Auth error'
                }
            }}>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const PrimaryWithErrorDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                loginForm: {
                    username: '123',
                    password: '123',
                    error: 'Auth error'
                }
            }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const PrimaryWithLoadingLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                loginForm: {
                    username: '123',
                    password: '123',
                    isLoading: true
                }
            }}>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const PrimaryWithLoadingDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{
                loginForm: {
                    username: '123',
                    password: '123',
                    isLoading: true
                }
            }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}
