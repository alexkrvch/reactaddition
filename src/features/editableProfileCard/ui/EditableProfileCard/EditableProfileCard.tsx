import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { type FC, memo, useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { type Currency } from 'ourEntities/Currency'
import { type Country } from 'ourEntities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import {
    getProfileValidateErrors
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileCard } from 'ourEntities/Profile'
import {
    EditableProfileCardHeader
} from '../EditableProfileCardHeader/EditableProfileCardHeader'
import { VStack } from 'shared/ui/Stack'

interface EditableProfileCardProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

export const EditableProfileCard: FC<EditableProfileCardProps> = memo((props) => {
    const {
        className,
        id
    } = props

    const dispatch = useAppDispatch()
    const { t } = useTranslation('profile')

    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateError = useSelector(getProfileValidateErrors)

    const validaErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Произошла ошибка на сервере'),
        [ValidateProfileError.INCORRECT_USER_LASTNAME]: t('Некорректная фамилия'),
        [ValidateProfileError.INCORRECT_USER_FIRSTNAME]: t('Некорректное имя'),
        [ValidateProfileError.INCORRECT_USER_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileError.INCORRECT_USER_AGE]: t('Некорретный возраст'),
        [ValidateProfileError.NO_DATA]: t('Нет данных')
    }

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [dispatch])

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        if (value && !/\D/.test(value)) {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
        } else {
            dispatch(profileActions.updateProfile({ age: undefined }))
        }
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <VStack gap={'16'} max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validateError?.length && validateError.map(err => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validaErrorTranslates[err]}
                        data-testid={'EditableProfileCard.Error'}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />
            </VStack>
        </DynamicModuleLoader>
    )
})
