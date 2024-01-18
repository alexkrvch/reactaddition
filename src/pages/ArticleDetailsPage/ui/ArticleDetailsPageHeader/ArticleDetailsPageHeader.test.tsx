import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender'

describe('ArticleDetailsPageHeader component', () => {
    test('Create and test render', () => {
        ComponentRender(<ArticleDetailsPageHeader/>)
    })
})
