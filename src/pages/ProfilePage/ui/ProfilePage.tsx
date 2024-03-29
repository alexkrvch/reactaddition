import { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { useParams } from 'react-router-dom'
import { ProfileRating } from '@/features/profileRating'

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className
    } = props

    const { id } = useParams<{ id: string }>()

    if (!id) {
        return null
    }

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <VStack gap={'16'} max>
                <EditableProfileCard id={id}/>
                <ProfileRating profileId={id}/>
            </VStack>
        </Page>
    )
}

export default ProfilePage
