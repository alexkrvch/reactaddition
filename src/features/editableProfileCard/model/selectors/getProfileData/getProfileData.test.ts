import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Country } from 'ourEntities/Country'
import { Currency } from 'ourEntities/Currency'

describe('getProfileData', () => {
    test('should return data users', () => {
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
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('should return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
