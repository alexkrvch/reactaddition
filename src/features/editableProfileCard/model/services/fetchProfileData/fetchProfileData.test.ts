import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from '@/ourEntities/Country'
import { Currency } from '@/ourEntities/Currency'

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

describe('fetchProfileData', () => {
    test('Test get profile data | success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('Test get profile data | error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
