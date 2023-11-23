import { type CounterSchema } from 'ourEntities/Counter'
import { type UserSchema } from 'ourEntities/User'
import { type LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    loginForm?: LoginSchema
}
