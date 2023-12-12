import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'
import React from 'react'

const meta = {
    title: 'shared/Flex',
    component: Flex,
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        children: (
            <>
                <div>111</div>
                <div>222</div>
                <div>333</div>
                <div>444</div>
            </>
        )
    },
    tags: ['autodocs']
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
    args: {}
}

export const ColumnLight: Story = {
    args: {
        direction: 'column'
    }
}

export const RowGap4Light: Story = {
    args: {
        gap: '4'
    }
}

export const RowGap8Light: Story = {
    args: {
        gap: '8'
    }
}

export const RowGap16Light: Story = {
    args: {
        gap: '16'
    }
}

export const RowGap32Light: Story = {
    args: {
        gap: '32'
    }
}

export const Column32Light: Story = {
    args: {
        gap: '32',
        direction: 'column'
    }
}

export const AlignEndLight: Story = {
    args: {
        gap: '4',
        justify: 'end'
    }
}
