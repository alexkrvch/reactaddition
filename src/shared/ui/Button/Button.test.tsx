import { Button, ButtonTheme } from '../Button/Button'
import { render, screen } from '@testing-library/react'

describe('Button component', () => {
    test('Create and check simple button', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('Create clear button', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})
