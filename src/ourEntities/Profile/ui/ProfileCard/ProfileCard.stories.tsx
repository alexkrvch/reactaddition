import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { ProfileCard } from './ProfileCard'
import { Country } from 'ourEntities/Country'
import { Currency } from 'ourEntities/Currency'
import avatar from 'shared/assets/png/150x150.png'

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
        data: {
            username: 'heikun',
            lastname: 'Kravchenko',
            age: 29,
            country: Country.Belarus,
            first: 'Alex',
            currency: Currency.RUB,
            avatar,
            city: 'Polotsk'
        },
        error: '',
        isLoading: false
    },
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const ProfileCardLight: Story = {
    decorators: [
        (Story) => (
            <Story />
        )
    ]
}

export const ProfileCardDark: Story = {
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const ProfileCardOrange: Story = {
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const EditMode: Story = {
    args: {
        readonly: false
    },
    decorators: [
        (Story) => (
            <Story />
        )
    ]
}

export const WithError: Story = {
    args: {
        error: 'true'
    },
    decorators: [
        (Story) => (
            <Story />
        )
    ]
}

export const LoadingCard: Story = {
    args: {
        isLoading: true
    },
    decorators: [
        (Story) => (
            <Story />
        )
    ]
}
