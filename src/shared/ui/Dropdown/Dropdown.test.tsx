import { Dropdown } from './Dropdown'
import { render } from '@testing-library/react'
import { Button } from '../Button/Button'
import React from 'react'

const items = [
    {
        id: 1,
        content: 'First'
    },
    {
        id: 2,
        content: 'Second'
    },
    {
        id: 3,
        content: 'Third'
    }
]
describe('Dropdown component', () => {
    test('Create and test render', () => {
        render(<Dropdown trigger={<Button>12345</Button>} items={items}/>)
    })
})
