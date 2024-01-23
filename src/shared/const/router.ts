export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    DEV = 'development',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',

    ADMIN_PANEL = 'admin_panel',

    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.DEV]: '/development',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/403',
    // last
    [AppRoutes.NOT_FOUND]: '*'
}
