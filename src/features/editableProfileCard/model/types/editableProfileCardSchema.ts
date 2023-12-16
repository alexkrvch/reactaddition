import { type Profile } from 'ourEntities/Profile'

export enum ValidateProfileError {
    INCORRECT_USER_FIRSTNAME = 'INCORRECT_USER_FIRSTNAME',
    INCORRECT_USER_LASTNAME = 'INCORRECT_USER_LASTNAME',
    INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
