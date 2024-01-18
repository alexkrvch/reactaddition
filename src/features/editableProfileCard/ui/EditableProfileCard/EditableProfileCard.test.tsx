import { screen } from '@testing-library/react'
import { EditableProfileCard } from './EditableProfileCard'
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender'
import { type Profile } from '@/ourEntities/Profile'
import { Currency } from '@/ourEntities/Currency'
import { Country } from '@/ourEntities/Country'
import { profileReducer } from '../../model/slice/profileSlice'
import userEvent from '@testing-library/user-event'
import { apiInstance } from '@/shared/api/api'

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'heikun',
    age: 465,
    currency: Currency.RUB,
    country: Country.Ukraine,
    city: 'Polotsk',
    username: 'admin123'
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile
        },
        user: {
            authData: { id: '1', username: 'admin' }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

describe('features/EditableProfileCard', () => {
    test('Go to edit mode', async () => {
        ComponentRender(<EditableProfileCard id={'1'} />, options)

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
    })

    test('After edit return to default data', async () => {
        ComponentRender(<EditableProfileCard id={'1'} />, options)

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('heikun')
    })

    test('After edit validate data', async () => {
        ComponentRender(<EditableProfileCard id={'1'} />, options)

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument()
    })

    test('After edit without error', async () => {
        const mockPutReq = jest.spyOn(apiInstance, 'put')
        ComponentRender(<EditableProfileCard id={'1'} />, options)

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(mockPutReq).toHaveBeenCalled()
    })
})
