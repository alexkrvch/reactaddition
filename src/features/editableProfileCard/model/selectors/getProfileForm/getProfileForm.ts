import { type StateSchema } from '@/app/providers/StoreProvider'
import { type Profile } from '@/ourEntities/Profile'

export const getProfileForm = (state: StateSchema): Profile | undefined => state.profile?.form
