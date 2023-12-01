import { ArticleTextBlockComponent } from './ArticleTextBlockComponent'
import { render, screen } from '@testing-library/react'

describe('ArticleTextBlockComponent component', () => {
    test('Create and test render', () => {
        render(<ArticleTextBlockComponent/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
