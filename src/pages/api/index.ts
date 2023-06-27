import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const orders = await getproducts(req.cookies.token as string)
    res.status(200).json(orders)
  }
}

const getproducts = (token: string) => {
  return fetch('http://localhost:5000/api/v1/orders', {
    headers: {
      authorization: `bearer ${token}`
    }
  }).then(resp => resp.json())
}
