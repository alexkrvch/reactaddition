import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent'
import { render, screen } from '@testing-library/react'

describe('ArticleCodeBlockComponent component', () => {
    test('Create and test render', () => {
        render(<ArticleCodeBlockComponent/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
