import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'entities/NotificationList',
    component: NotificationList,
    parameters: {
        layout: 'fullscreen',
        mockData: [
            {
                url: `${_API_}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    { id: '1', title: 'Уведомление 1', description: 'Описание уведомления' },
                    { id: '2', title: 'Уведомление 2', description: 'Описание уведомления' },
                    { id: '3', title: 'Уведомление 3', description: 'Описание уведомления' }
                ]
            }
        ]
    },
    tags: ['autodocs']
} satisfies Meta<typeof NotificationList>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={
                {
                    user: {
                        authData: { id: '1', username: 'admin' }
                    }
                }}>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const PrimaryDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={
                {
                    user: {
                        authData: { id: '1', username: 'admin' }
                    }
                }}>

                <ThemeDecorator theme={Theme.DARK}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}

export const PrimaryOrange: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={
                {
                    user: {
                        authData: { id: '1', username: 'admin' }
                    }
                }}>
                <ThemeDecorator theme={Theme.ORANGE}>
                    <Story/>
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}
