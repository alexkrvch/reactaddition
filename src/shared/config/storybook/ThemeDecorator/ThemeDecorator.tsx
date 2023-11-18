import { type Theme } from 'app/providers/ThemeProvider'
import { type FC, type ReactNode } from 'react'

interface ThemeDecoratorProps {
    theme: Theme
    children: ReactNode
}

export const ThemeDecorator: FC<ThemeDecoratorProps> = ({ theme, children }) => (
    <div className={`app ${theme}`}>
        {children}
    </div>
)
