import { type FC, type ReactNode, Suspense } from 'react'
import i18n from '../../i18n/i18n'
import { I18nextProvider } from 'react-i18next'

interface ThemeDecoratorProps {
    children: ReactNode
}

export const TranslationDecorator: FC<ThemeDecoratorProps> = ({ children }) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback={(<div>....</div>)}>
            {children}
        </Suspense>
    </I18nextProvider>
)
