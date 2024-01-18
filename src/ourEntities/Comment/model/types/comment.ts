import { type User } from '@/ourEntities/User'

export interface Comment {
    id: string
    user: User
    text: string
}
