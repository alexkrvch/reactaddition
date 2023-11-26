import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePage.module.scss'
import {
    DynamicModuleLoader,
    type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'ourEntities/Profile'

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

    const { t } = useTranslation('profile')

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                {t('Profile page')}
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
