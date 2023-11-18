import type { Preview } from '@storybook/react'
import React from 'react'
import { Theme } from 'app/providers/ThemeProvider'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const preview: Preview = {
    parameters: {
        layout: 'fullscreen',
        viewport: {
            viewports: INITIAL_VIEWPORTS
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        (Story) => (
            <StyleDecorator>
                <RouterDecorator>
                    <ThemeDecorator theme={Theme.LIGHT}>
                        <Story />
                    </ThemeDecorator>
                </RouterDecorator>
            </StyleDecorator>
        )
    ]
}

export default preview
