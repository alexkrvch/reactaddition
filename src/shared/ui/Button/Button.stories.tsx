import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {
        children: 'Test'
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'Test'
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
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const ClearLight: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Test'
    }
}

export const ClearDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const ClearOrange: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const ClearInvertedLight: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Test'
    }
}

export const ClearInvertedDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const ClearInvertedOrange: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const OutlineLight: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Test'
    }
}

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const OutlineOrange: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const OutlineLightSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Test',
        size: ButtonSize.L
    }
}

export const OutlineDarkSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Test',
        size: ButtonSize.L
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const OutlineOrangeSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Test',
        size: ButtonSize.L
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const OutlineLightSizeXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Test',
        size: ButtonSize.XL
    }
}

export const OutlineDarkSizeXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Test',
        size: ButtonSize.XL
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const OutlineOrangeSizeXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Test',
        size: ButtonSize.XL
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const BackgroundLight: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Test'
    }
}

export const BackgroundDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const BackgroundOrange: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const BackgroundInvertedLight: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Test'
    }
}

export const BackgroundInvertedDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const BackgroundInvertedOrange: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const SquareLight: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true
    }
}

export const SquareDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '<',
        square: true
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const SquareOrange: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '<',
        square: true
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const SquareLLight: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        size: ButtonSize.L,
        square: true
    }
}

export const SquareLDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '<',
        size: ButtonSize.L,
        square: true
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const SquareLOrange: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '<',
        size: ButtonSize.L,
        square: true
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const SquareXLLight: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        size: ButtonSize.XL,
        square: true
    }
}

export const SquareXLDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '<',
        size: ButtonSize.XL,
        square: true
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const SquareXLOrange: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '<',
        size: ButtonSize.XL,
        square: true
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const DisabledLight: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
        disabled: true
    }
}

export const DisabledDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
        disabled: true
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}

export const DisabledOrange: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
        disabled: true
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}
