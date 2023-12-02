import { Skeleton } from './Skeleton'
import { render } from '@testing-library/react'

describe('Skeleton component', () => {
    test('Create and test render', () => {
        render(<Skeleton/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
