export interface Order {
  id: string
  nameClient: string
  phone: string
  Date: string
  status: string
  comment: string
  items: Item[]
}

export interface Item {
  quantity: number
  id: string
}
