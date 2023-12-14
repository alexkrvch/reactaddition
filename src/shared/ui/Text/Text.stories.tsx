import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextSize, TextTheme } from './Text'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {
        title: 'Title lorem',
        text: 'Desc text for something'
    }
}

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem',
        text: 'Desc text for something'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOrange: Story = {
    args: {
        title: 'Title lorem',
        text: 'Desc text for something'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const PrimaryLightS: Story = {
    args: {
        title: 'Title lorem',
        text: 'Desc text for something',
        size: TextSize.S
    }
}

export const PrimaryDarkS: Story = {
    args: {
        title: 'Title lorem',
        text: 'Desc text for something',
        size: TextSize.S
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOrangeS: Story = {
    args: {
        title: 'Title lorem',
        text: 'Desc text for something',
        size: TextSize.S
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const PrimaryLightL: Story = {
    args: {
        title: 'Title lorem',
        text: 'Desc text for something',
        size: TextSize.L
    }
}

export const PrimaryDarkL: Story = {
    args: {
        title: 'Title lorem',
        text: 'Desc text for something',
        size: TextSize.L
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOrangeL: Story = {
    args: {
        title: 'Title lorem',
        text: 'Desc text for something',
        size: TextSize.L
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOnlyTitleLight: Story = {
    args: {
        title: 'Title lorem'
    }
}

export const PrimaryOnlyTitleDark: Story = {
    args: {
        title: 'Title lorem'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOnlyTitleOrange: Story = {
    args: {
        title: 'Title lorem'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOnlyTextLight: Story = {
    args: {
        text: 'Desc text for something'
    }
}

export const PrimaryOnlyTextDark: Story = {
    args: {
        text: 'Desc text for something'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const PrimaryOnlyTextOrange: Story = {
    args: {
        text: 'Desc text for something'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const ErrorLight: Story = {
    args: {
        title: 'Title error',
        text: 'Desc error info',
        theme: TextTheme.ERROR
    }
}

export const ErrorDark: Story = {
    args: {
        title: 'Title error',
        text: 'Desc error info',
        theme: TextTheme.ERROR
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        )
    ]
}

export const ErrorOrange: Story = {
    args: {
        title: 'Title error',
        text: 'Desc error info',
        theme: TextTheme.ERROR
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story />
            </ThemeDecorator>
        )
    ]
}
