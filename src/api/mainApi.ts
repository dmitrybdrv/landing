import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {'Content-Type': 'application/json'}
})

export const sendApi = {
    sendMail(data: DataType) {
        return instance.post<RequestServerType>(`send-email`, data)
    },
    unsubscribe(data: UnsubscribeDataType) {
        return instance.post(`unsubscribe-page/:id`, data)
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

export const StatusCode = {
    Success: 200,
    ClientError: 400,
    ServerError: 500
}as const

export type UnsubscribeDataType = {
    id: string
}