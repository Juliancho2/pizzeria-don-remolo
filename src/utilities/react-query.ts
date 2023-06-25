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

export const mutation = <T, F>(
  { url, method, options }: Props,
  service: ({ url, method, data, options }: ServiceProps<F>) => Promise<T>
) => {
  return useMutation(async (data: F) => {
    return service({
      data,
      method,
      url,
      options
    })
  })
}
