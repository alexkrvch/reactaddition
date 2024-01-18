import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

export const apiInstance = axios.create({
    baseURL: _API_
})

apiInstance.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
    }
    return config
})
