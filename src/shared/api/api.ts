import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

export const apiInstance = axios.create({
    baseURL: _API_,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
})
