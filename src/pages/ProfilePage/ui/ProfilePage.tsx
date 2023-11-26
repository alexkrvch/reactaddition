import { useEffect, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePage.module.scss'
import {
    DynamicModuleLoader,
    type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'ourEntities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

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
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                {t('Profile page')}
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
