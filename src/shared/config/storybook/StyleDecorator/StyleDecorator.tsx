import '@/app/styles/index.scss'
import { type FC, type ReactNode } from 'react'

interface StyleDecoratorProps {
    children: ReactNode
}

export const StyleDecorator: FC<StyleDecoratorProps> = ({ children }) => (
    <div style={{ height: '100vh', textAlign: 'center' }}>
        <div style={{ display: 'block' }}>
            {children}
        </div>
    </div>
)
