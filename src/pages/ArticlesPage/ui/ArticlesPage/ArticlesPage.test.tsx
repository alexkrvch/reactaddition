import ArticlesPage from './ArticlesPage'
import { render } from '@testing-library/react'

describe('ArticlesPage component', () => {
    test('Create and test render', () => {
        render(<ArticlesPage/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
