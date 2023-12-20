import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender'
import { ListBox } from './ListBox'

describe('ListBox component', () => {
    test('Create and test render', () => {
        ComponentRender(<ListBox onChange={() => {} }/>)
    })
})
