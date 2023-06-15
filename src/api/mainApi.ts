import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {'Content-Type': 'application/json'}
})

export const sendApi = {
    sendMail(data: DataType) {
        return instance.post(`send-email`, data)
    },
    checkServ() {
        return instance.get(`/`)
    }

}

export type DataType = {
    email: string
    name: string
    termsOfService: boolean
}