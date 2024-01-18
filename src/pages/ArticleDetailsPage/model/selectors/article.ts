import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailsData } from '@/ourEntities/Article'
import { getUserAuthData } from '@/ourEntities/User'

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false
        }

        return article.user.id === user.id
    }
)
