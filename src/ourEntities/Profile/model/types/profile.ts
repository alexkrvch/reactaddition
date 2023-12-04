import { type Currency } from 'ourEntities/Currency/model/types/currency'
import { type Country } from 'ourEntities/Country/model/types/country'

export enum ValidateProfileError {
    INCORRECT_USER_FIRSTNAME = 'INCORRECT_USER_FIRSTNAME',
    INCORRECT_USER_LASTNAME = 'INCORRECT_USER_LASTNAME',
    INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    id?: string
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
