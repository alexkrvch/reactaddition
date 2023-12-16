import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'
describe('getProfileError', () => {
    test('should return error text', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '12345'
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual('12345')
    })

    test('should return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual('')
    })
})
