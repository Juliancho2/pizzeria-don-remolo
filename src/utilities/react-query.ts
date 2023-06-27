import { useMutation, useQuery } from 'react-query'
import { AxiosRequestConfig, Method } from 'axios'

interface Props {
  url: string
  method: Method
  options?: AxiosRequestConfig
}

interface ServiceMutationProps<F> extends Props {
  data: F
}

interface QueryProps<F> extends Omit<Props, 'data' | 'method'> {
  queryKey: string
  params?: F
}

type ServiceQueryProps<F> = Omit<QueryProps<F>, 'queryKey'>

export interface ApiResponse<T> {
  raw: T
}

export const mutation = <T, F>(
  { url, method, options }: Props,
  service: <T, F>({
    url,
    method,
    data,
    options
  }: ServiceMutationProps<F>) => Promise<ApiResponse<T>>
) => {
  return useMutation((data: F) =>
    service<T, F>({
      data,
      method,
      url,
      options
    }).then(resp => resp.raw)
  )
}

export const query = <T, F>(
  { queryKey, url, params, options }: QueryProps<F>,
  service: <T, F>({
    url,
    params,
    options
  }: ServiceQueryProps<F>) => Promise<ApiResponse<T>>
) => {
  return useQuery(queryKey, async () => {
    const resp = await service<T, F>({ url, params, options })
    return resp.raw
  })
}
