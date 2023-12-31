import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack/VStack/VStack'
import { EditableProfileCard } from 'features/editableProfileCard'
import { useParams } from 'react-router-dom'

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className
    } = props

    const { id } = useParams<{ id: string }>()

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <VStack gap={'16'} max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage
