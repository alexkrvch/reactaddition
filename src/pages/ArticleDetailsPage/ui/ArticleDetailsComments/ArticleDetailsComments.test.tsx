import { ArticleDetailsComments } from './ArticleDetailsComments'
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender'

describe('ArticleDetailsComments component', () => {
    test('Create and test render', () => {
        ComponentRender(<ArticleDetailsComments id={'1'}/>)
    })
})
