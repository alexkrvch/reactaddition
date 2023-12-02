import { Code } from './Code'
import { render, screen } from '@testing-library/react'

describe('Code component', () => {
    test('Create and test render', () => {
        render(<Code/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
