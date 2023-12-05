import { ArticleList } from './ArticleList'
import { render, screen } from '@testing-library/react'

describe('ArticleList component', () => {
    test('Create and test render', () => {
        render(<ArticleList/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
