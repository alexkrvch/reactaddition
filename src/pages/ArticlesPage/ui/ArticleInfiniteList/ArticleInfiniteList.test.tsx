import { ArticleInfiniteList } from './ArticleInfiniteList'
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender'

describe('ArticleInfiniteList component', () => {
    test('Create and test render', () => {
        ComponentRender(<ArticleInfiniteList/>)
    })
})
