import { type StateSchema } from 'app/providers/StoreProvider'

export const getAddCommentFormText =
    (state: StateSchema): string => state.addCommentForm?.text ?? ''

export const getAddCommentFormError =
    (state: StateSchema): string => state.addCommentForm?.error || ''

export const getAddCommentFormIsLoading =
    (state: StateSchema): boolean => state.addCommentForm?.isLoading || false
