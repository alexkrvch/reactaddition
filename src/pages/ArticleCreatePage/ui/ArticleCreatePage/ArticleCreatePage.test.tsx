import ArticleCreatePage from './ArticleCreatePage'
import { render } from '@testing-library/react'

describe('ArticleCreatePage component', () => {
    test('Create and test render', () => {
        render(<ArticleCreatePage/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
