import ArticlesPage from './ArticlesPage'
import { render, screen } from '@testing-library/react'

describe('ArticlesPage component', () => {
    test('Create and test render', () => {
        render(<ArticlesPage/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
