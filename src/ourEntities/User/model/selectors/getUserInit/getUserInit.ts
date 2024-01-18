import { type StateSchema } from '@/app/providers/StoreProvider'

export const getUserInit = (state: StateSchema): boolean => state.user._init
