import { QueryClient, dehydrate } from 'react-query'
import { GetServerSideProps, NextPage } from 'next'

import { ApiResponse, query } from '@/src/utilities/react-query'
import { GetAllOrdersService } from '@/src/services/orders/getAllOrders'
import { Order } from '@/src/interface/orders'
import { Table } from '@/src/components/atomic/Table'
import { columns } from '@/src/Adapters/Table/Orders'

export const getServerSideProps: GetServerSideProps = async ctx => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('orders', async () => {
    const resp = await GetAllOrdersService<
      ApiResponse<Order[]>,
      { limit: string; offset: string }
    >({
      url: '/orders',
      params: { limit: '10', offset: '1' },
      options: {
        headers: {
          Authorization: `Bearer ${ctx.req.cookies.token}`
        }
      }
    })

    return resp.raw
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

const AdminPage: NextPage = () => {
  const { data } = query<Order[], { limit: string; offset: string }>(
    {
      queryKey: 'orders',
      url: '/orders',
      params: { limit: '10', offset: '1' }
    },
    GetAllOrdersService
  )

  return (
    <>
      <h1 className="text-4xl font-bold">Admin Page</h1>
      <Table<Omit<Order, 'items'>> columns={columns} rows={data as Order[]} />
    </>
  )
}

export default AdminPage
