import { ArticleSortSelector } from './ArticleSortSelector'
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender'
import { ArticleSortField } from '../../model/consts/consts'

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
