import { type StateSchema } from '@/app/providers/StoreProvider'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../selectors/articleDetails'

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'some title',
            subtitle: 'some subtitle'
        }
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data
            }
        }

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should return isLoading with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
    })

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: '123'
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('123')
    })

    test('should return error with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsError(state as StateSchema)).toEqual('')
    })
})
