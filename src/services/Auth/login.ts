import { AxiosRequestConfig, Method } from 'axios'

import { axiosInstance } from '@/src/axiosInstance/instance'

interface Props<F> {
  url: string
  method: Method
  data: F
  options?: AxiosRequestConfig
}

export const LoginService = async <T, F>({
  url,
  method,
  data,
  options
}: Props<F>) => {
  const resp = await axiosInstance<T>({
    url,
    method,
    data,
    ...options
  })
  return resp.data
}
