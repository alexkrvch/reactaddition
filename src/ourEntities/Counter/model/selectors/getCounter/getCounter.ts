import { type StateSchema } from 'app/providers/StoreProvider'
import { type CounterSchema } from 'ourEntities/Counter'

export const getCounter = (state: StateSchema): CounterSchema => state.counter
