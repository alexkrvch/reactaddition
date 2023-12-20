import { Flex } from './Flex'
import { render } from '@testing-library/react'

describe('Flex component', () => {
    test('Create and test render', () => {
        render(<Flex>12345</Flex>)
    })
})
