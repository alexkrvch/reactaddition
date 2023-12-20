import { ArticleSortSelector } from './ArticleSortSelector'
import { ArticleSortField } from '../../model/types/article'
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender'

describe('ArticleSortSelector component', () => {
    test('Create and test render', () => {
        ComponentRender(<ArticleSortSelector
            onChangeSort={() => {}}
            onChangeOrder={() => {}}
            sort={ArticleSortField.VIEWS}
            order={'asc'}
        />)
    })
})
