import { NotificationButton } from './NotificationButton'
import { render } from '@testing-library/react'

describe('NotificationButton component', () => {
    test('Create and test render', () => {
        render(<NotificationButton/>)
        // expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
