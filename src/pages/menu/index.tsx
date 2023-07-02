import { QueryClient, dehydrate } from 'react-query'
import React from 'react'
import { GetServerSideProps } from 'next'

import { ApiResponse, query } from '@/src/utilities/react-query'
import { GetAllProductsService } from '@/src/services/products/getAllProducts'
import { Categories, ProductInterface } from '@/src/interface/productInterface'
import { CategoryContainer } from '@/src/components/organisms/CategoryContainer'
import { NavBarCategories } from '@/src/components/molecules/NavBarCategories'

import { Layout } from '../layout'

const categories: Categories[] = [
  {
    label: 'Pizza',
    icon: '/assets/img/pizzaCategory.png'
  },
  {
    label: 'Empanada',
    icon: '/assets/img/empanadaCategory.png'
  },
  {
    label: 'Bebida',
    icon: '/assets/img/drinkCategory.png'
  },
  {
    label: 'Postre',
    icon: '/assets/img/dessertCategory.png'
  }
]

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('products', async () => {
    const resp = await GetAllProductsService<
      ApiResponse<ProductInterface[]>,
      string
    >({
      url: '/products',
      params: ''
    })

    return resp.raw
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

const index = () => {
  const { data, isSuccess } = query<ProductInterface[], string>(
    {
      queryKey: 'products',
      url: '/products',
      params: ''
    },
    GetAllProductsService
  )
  return (
    <Layout>
      <NavBarCategories categories={categories} />
      <div className="container mt-10 min-h-screen mx-auto ">
        {/* productos dividos por categorias */}
        {isSuccess && (
          <CategoryContainer category={categories} products={data} />
        )}
      </div>
    </Layout>
  )
}

export default index
