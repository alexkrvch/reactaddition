import { ArticlesPageFilter } from './ArticlesPageFilter'
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender'

describe('ArticlesPageFilter component', () => {
    test('Create and test render', () => {
        ComponentRender(<ArticlesPageFilter/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
