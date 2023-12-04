import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './AddCommentForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
    getAddCommentFormError, getAddCommentFormIsLoading,
    getAddCommentFormText
} from '../../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
    addCommentFormActions,
    addCommentFormReducer
} from '../../model/slices/addCommentFormSlice'
import {
    DynamicModuleLoader,
    type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { sendComment } from 'features/addCommentForm/model/services/sendComment/sendComment'

interface AddCommentFormProps {
    className?: string
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
    const {
        className
    } = props
    const { t } = useTranslation('article')
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)
    const isLoading = useSelector(getAddCommentFormIsLoading)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendComment = useCallback(() => {
        dispatch(sendComment())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                    className={cls.input}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendComment}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
