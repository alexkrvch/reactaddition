import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Country } from 'ourEntities/Country'
import { Currency } from 'ourEntities/Currency'
describe('getProfileForm', () => {
    test('should return form data', () => {
        const data = {
            username: 'heikun',
            lastname: 'Kravchenko',
            age: 29,
            country: Country.Belarus,
            first: 'Alex',
            currency: Currency.RUB,
            avatar: '',
            city: 'Polotsk'
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })

    test('should return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
