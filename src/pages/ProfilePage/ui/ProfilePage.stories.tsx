import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const ProfilePageLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{ profile: undefined }}>
                <Story />
            </StoreDecorator>
        )
    ]
}

export const ProfilePageDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={{ profile: undefined }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}
