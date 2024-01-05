import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type Article } from 'ourEntities/Article'
import { UserRole } from 'ourEntities/User'

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 45,
    user: { id: '1', username: 'heikun', roles: [UserRole.USER] },
    blocks: [],
    type: [],
    title: 'React js its future',
    subtitle: 'What new in React'
}

const meta = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    parameters: {
        layout: 'fullscreen',
        mockData: [
            {
                url: `${_API_}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' }
                ]
            }
        ]
    },
    tags: ['autodocs']
} satisfies Meta<typeof ArticleRecommendationsList>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreProvider initialState={{}}>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <Story/>
                </ThemeDecorator>
            </StoreProvider>
        )
    ]
}

export const PrimaryDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreProvider initialState={{}}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story/>
                </ThemeDecorator>
            </StoreProvider>
        )
    ]
}

export const PrimaryOrange: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreProvider initialState={{}}>
                <ThemeDecorator theme={Theme.ORANGE}>
                    <Story/>
                </ThemeDecorator>
            </StoreProvider>
        )
    ]
}
