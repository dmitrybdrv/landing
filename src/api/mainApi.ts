import axios from "axios";

/**
 * базовый URL при взаимодействии с API (url для запросов)
 */
export const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    headers: {'Content-Type': 'application/json'}
})

/**
 * Объект для работы с API. Метод запроса на отправку писем и метод для отписки от получения писем
 */
export const sendApi = {
    sendMail(data: DataType) {
        return instance.post<RequestServerType>(`send-email`, data)
    },
    unsubscribe(data: UnsubscribeDataType) {
        return instance.post<RequestServerType>(`unsubscribe-page/:id`, data)
    }
}


export type DataType = {
    email: string
    name: string
    termsOfService: boolean
}

export type RequestServerType = {
    message?: string
    error?: string
}

export type UnsubscribeDataType = {
    id: string
}