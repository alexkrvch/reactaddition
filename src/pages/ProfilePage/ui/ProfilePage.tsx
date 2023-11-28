import { type FC, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import {
    DynamicModuleLoader,
    type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError
} from 'ourEntities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { type Currency } from 'ourEntities/Currency'
import { type Country } from 'ourEntities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className
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

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

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
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                {validateError?.length && validateError.map(err => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validaErrorTranslates[err]}
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
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
