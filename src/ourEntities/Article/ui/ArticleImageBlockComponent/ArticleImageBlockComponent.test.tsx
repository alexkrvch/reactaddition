import { ArticleImageBlockComponent } from './ArticleImageBlockComponent'
import { render, screen } from '@testing-library/react'

describe('ArticleImageBlockComponent component', () => {
    test('Create and test render', () => {
        render(<ArticleImageBlockComponent/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
