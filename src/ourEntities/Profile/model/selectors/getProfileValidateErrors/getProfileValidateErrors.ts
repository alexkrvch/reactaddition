import { type StateSchema } from 'app/providers/StoreProvider'
import { type ValidateProfileError } from 'ourEntities/Profile'

export const getProfileValidateErrors = (state: StateSchema): ValidateProfileError[] | undefined =>
    state.profile?.validateErrors
