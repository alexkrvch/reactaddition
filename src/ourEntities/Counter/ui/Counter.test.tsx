import { screen } from '@testing-library/react'
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender'
import { Counter } from './Counter'
import { userEvent } from '@storybook/testing-library'

describe('Counter test', () => {
    test('Render Counter', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })

    test('Render Counter and increment', async () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        await userEvent.click(screen.getByTestId('increment-button'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })

    test('Render Counter and decrement', async () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        await userEvent.click(screen.getByTestId('decrement-button'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
})
