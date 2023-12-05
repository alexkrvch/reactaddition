import { Card } from './Card'
import { render, screen } from '@testing-library/react'

describe('Card component', () => {
    test('Create and test render', () => {
        render(<Card/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
