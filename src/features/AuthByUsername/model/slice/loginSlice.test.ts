import { type LoginSchema } from '../types/loginScheme'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'Alex' }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('12345'))
        ).toEqual({ username: '12345' })
    })

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123456' }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'))
        ).toEqual({ password: '123' })
    })
})
