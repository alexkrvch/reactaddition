import { type FC, useEffect, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

// Component for test error
export const BugButton: FC = () => {
    const [error, setError] = useState(false)
    const { t } = useTranslation()
    const onThrow = (): void => { setError(true) }

    useEffect(() => {
        if (error) { throw new Error() }
    }, [error])

    return (
        <Button
            className={classNames('', {}, [])}
            onClick={onThrow}
        >
            {t('Throw error')}
        </Button>
    )
}
