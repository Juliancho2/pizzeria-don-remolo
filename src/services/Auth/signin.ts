import { fetcher } from '@/src/utilities/fetcher'

export const SigninService = async (
  url: string,
  { arg }: { arg: { email: string; password: string } }
) => {
  return fetcher(url, {
    method: 'POST',
    data: arg
  })
}
