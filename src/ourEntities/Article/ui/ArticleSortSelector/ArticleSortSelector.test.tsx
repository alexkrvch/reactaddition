import { ArticleSortSelector } from './ArticleSortSelector'
import { render } from '@testing-library/react'
import { ArticleSortField } from 'ourEntities/Article'

describe('ArticleSortSelector component', () => {
    test('Create and test render', () => {
        render(<ArticleSortSelector
            onChangeSort={() => {}}
            onChangeOrder={() => {}}
            sort={ArticleSortField.VIEWS}
            order={'asc'}
        />)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
