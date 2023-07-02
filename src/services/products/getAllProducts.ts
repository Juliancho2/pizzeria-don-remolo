import { AxiosRequestConfig } from 'axios'

import { axiosInstance } from '@/src/axiosInstance/instance'

interface Props<F> {
  url: string
  params?: F
  options?: AxiosRequestConfig
}

export const GetAllProductsService = async <T, F>({
  url,
  params,
  options
}: Props<F>) => {
  const resp = await axiosInstance<T>({
    url,
    params,
    ...options
  })

  return resp.data
}
