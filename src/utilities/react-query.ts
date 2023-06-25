import { useMutation } from 'react-query'
import { AxiosRequestConfig, Method } from 'axios'

interface Props {
  url: string
  method: Method
  options?: AxiosRequestConfig
}

interface ServiceProps<F> extends Props {
  data: F
}

interface ApiResponse<T> {
  raw: T
}

export const mutation = <T, F>(
  { url, method, options }: Props,
  service: ({
    url,
    method,
    data,
    options
  }: ServiceProps<F>) => Promise<ApiResponse<T>>
) => {
  return useMutation(async (data: F) => {
    const resp = await service({
      data,
      method,
      url,
      options
    })

    return resp.raw
  })
}
