import { type StateSchema } from '@/app/providers/StoreProvider'

export const getProfileLoading = (state: StateSchema): boolean => state.profile?.isLoading || false
