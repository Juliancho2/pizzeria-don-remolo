import { AxiosRequestConfig } from 'axios'

import { axiosInstance } from '../axiosInstance/instance'

export const fetcher = (url: string, options?: AxiosRequestConfig) =>
  axiosInstance(`${url}`, {
    ...options
  }).then(resp => resp.data)
