import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country } from 'ourEntities/Country'
import { Currency } from 'ourEntities/Currency'
import avatar from 'shared/assets/png/150x150.png'

const dataForProfile = {
    profile: {
        form: {
            username: 'heikun',
            lastname: 'Kravchenko',
            age: 29,
            country: Country.Belarus,
            first: 'Alex',
            currency: Currency.RUB,
            avatar,
            city: 'Polotsk'
        }
    }
}

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
            <StoreDecorator state={dataForProfile}>
                <Story />
            </StoreDecorator>
        )
    ]
}

export const ProfilePageDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={dataForProfile}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        )
    ]
}
