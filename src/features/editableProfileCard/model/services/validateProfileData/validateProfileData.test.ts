import { validateProfileData } from './validateProfileData'
import { Country } from 'ourEntities/Country'
import { Currency } from 'ourEntities/Currency'

import { ValidateProfileError } from '../../consts/consts'

const data = {
    username: 'heikun',
    lastname: 'Kravchenko',
    age: 29,
    country: Country.Belarus,
    first: 'Alex',
    currency: Currency.RUB,
    avatar: '',
    city: 'Polotsk'
}

describe('validateProfileData', () => {
    test('Test validate profile data | success', () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('without first/last names', () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_FIRSTNAME,
            ValidateProfileError.INCORRECT_USER_LASTNAME
        ])
    })

    test('incorrect age', () => {
        const result = validateProfileData({ ...data, age: undefined })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_AGE
        ])
    })

    test('incorrect country', () => {
        const result = validateProfileData({ ...data, country: undefined })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_COUNTRY
        ])
    })

    test('empty data', () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_FIRSTNAME,
            ValidateProfileError.INCORRECT_USER_LASTNAME,
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY
        ])
    })
})
