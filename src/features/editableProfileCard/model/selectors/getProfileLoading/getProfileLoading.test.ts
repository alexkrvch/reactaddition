import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileLoading } from './getProfileLoading'

describe('getProfileLoading', () => {
    test('should return loading status', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        }
        expect(getProfileLoading(state as StateSchema)).toEqual(true)
    })

    test('should return false with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileLoading(state as StateSchema)).toEqual(false)
    })
})
