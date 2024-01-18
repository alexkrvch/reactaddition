import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import React from 'react'

const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {
        text: 'const meta = {\n' +
            '    title: \'shared/Code\',\n' +
            '    component: Code,\n' +
            '    parameters: {\n' +
            '        layout: \'fullscreen\'\n' +
            '    },\n' +
            '    tags: [\'autodocs\']\n' +
            '} satisfies Meta<typeof Code>\n' +
            '\n' +
            'export default meta\n' +
            'type Story = StoryObj<typeof meta>\n'
    }
}

export const PrimaryDark: Story = {
    args: {
        text: 'const meta = {\n' +
            '    title: \'shared/Code\',\n' +
            '    component: Code,\n' +
            '    parameters: {\n' +
            '        layout: \'fullscreen\'\n' +
            '    },\n' +
            '    tags: [\'autodocs\']\n' +
            '} satisfies Meta<typeof Code>\n' +
            '\n' +
            'export default meta\n' +
            'type Story = StoryObj<typeof meta>\n'
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
        text: 'const meta = {\n' +
            '    title: \'shared/Code\',\n' +
            '    component: Code,\n' +
            '    parameters: {\n' +
            '        layout: \'fullscreen\'\n' +
            '    },\n' +
            '    tags: [\'autodocs\']\n' +
            '} satisfies Meta<typeof Code>\n' +
            '\n' +
            'export default meta\n' +
            'type Story = StoryObj<typeof meta>\n'
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.ORANGE}>
                <Story/>
            </ThemeDecorator>
        )
    ]
}
