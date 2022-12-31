import axios, { AxiosRequestConfig } from 'axios'
import { User } from 'types/types'

const baseUrl = 'http://localhost:3030'

export function getJWTHeader(user: User): Record<string, string> {
    return { Authorization: `Bearer ${user.token}` }
}

const config: AxiosRequestConfig = { baseURL: baseUrl }
export const axiosInstance = axios.create(config)
