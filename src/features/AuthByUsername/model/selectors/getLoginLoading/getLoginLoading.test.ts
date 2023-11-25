import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginLoading } from './getLoginLoading'

describe('getLoginLoading', () => {
    test('should return loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginLoading(state as StateSchema)).toEqual(true)
    })

    test('should return loading with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginLoading(state as StateSchema)).toEqual(false)
    })
})