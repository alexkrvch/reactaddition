import ArticleDetailsPage from './ArticleDetailsPage'
import { render, screen } from '@testing-library/react'

describe('ArticleDetailsPage component', () => {
    test('Create and test render', () => {
        render(<ArticleDetailsPage/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
