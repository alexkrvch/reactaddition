import ArticleEditPage from './ArticleEditPage'
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender'

describe('ArticleEditPage component', () => {
    test('Create and test render', () => {
        ComponentRender(<ArticleEditPage/>)
    })
})
