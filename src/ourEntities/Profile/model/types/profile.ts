import { type Currency } from 'ourEntities/Currency/model/types/currency'
import { type Country } from 'ourEntities/Country/model/types/country'

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
