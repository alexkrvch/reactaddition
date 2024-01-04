import { type Currency } from 'ourEntities/Currency'
import { type Country } from 'ourEntities/Country'

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
