import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError'
import { Loader } from 'shared/ui/Loader/Loader'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    // eslint-disable-next-line n/handle-callback-err
    static getDerivedStateFromError (): { hasError: boolean } {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    }

    render (): ReactNode {
        const { hasError } = this.state
        const { children } = this.props

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback={<Loader />}>
                    <PageError />
                </Suspense>
            )
        } else {
            return children
        }
    }
}
