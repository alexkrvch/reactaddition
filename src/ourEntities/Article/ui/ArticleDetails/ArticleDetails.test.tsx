import { ArticleDetails } from './ArticleDetails'
import { render, screen } from '@testing-library/react'

describe('ArticleDetails component', () => {
    test('Create and test render', () => {
        render(<ArticleDetails/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
