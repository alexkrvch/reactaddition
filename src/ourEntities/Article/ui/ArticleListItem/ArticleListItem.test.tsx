import { ArticleListItem } from './ArticleListItem'
import { render, screen } from '@testing-library/react'

describe('ArticleListItem component', () => {
    test('Create and test render', () => {
        render(<ArticleListItem/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
