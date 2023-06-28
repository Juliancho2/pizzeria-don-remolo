import axios, { AxiosError, AxiosInstance } from 'axios'

import { isServer } from '@/src/utilities'

import cookiesManager from '../utilities/cookiesManager'

export const BASE_URL = isServer()
  ? process.env.API_BASE_URL
  : process.env.NEXT_PUBLIC_API_BASE_URL

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL
})

const handleRequest = (config: any) => {
  if (!isServer()) {
    const token = cookiesManager.getInCookies('token')
    config.headers.Authorization = `Bearer ${token}`
  }

  // Aquí puedes hacer cualquier transformación o validación que necesites
  return config
}

const handleError = (error: AxiosError) => {
  // Aquí puedes manejar errores específicos o personalizados
  return Promise.reject(error)
}

// Configura los interceptores para transformar las peticiones y respuestas
axiosInstance.interceptors.request.use(handleRequest)
axiosInstance.interceptors.response.use(response => response, handleError)
