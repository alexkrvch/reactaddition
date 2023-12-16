import { ValidateProfileError } from '../../types/editableProfileCardSchema'
import { type Profile } from 'ourEntities/Profile'

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA]
    }

    const {
        first,
        lastname,
        age,
        country
    } = profile
    const errors: ValidateProfileError[] = []

    if (!first) {
        errors.push(ValidateProfileError.INCORRECT_USER_FIRSTNAME)
    }

    if (!lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_LASTNAME)
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_USER_AGE)
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_USER_COUNTRY)
    }

    return errors
}
