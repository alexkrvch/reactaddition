import { AddCommentForm } from './AddCommentForm'
import { render, screen } from '@testing-library/react'

describe('AddCommentForm component', () => {
    test('Create and test render', () => {
        render(<AddCommentForm/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
