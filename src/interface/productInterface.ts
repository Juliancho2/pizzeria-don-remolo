export interface categoryInterface {
  name: string
}

export interface ProductInterface {
  id: number
  name: string
  price: number
  imgURL: string
  description: string
  categoryId: string
  category: categoryInterface
}
