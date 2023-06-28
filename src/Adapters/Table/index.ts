export interface Column {
  id: string
  label: string
}

export type Row<T> = {
  [K in keyof T]: string | number
}
