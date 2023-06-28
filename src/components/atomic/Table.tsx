import { Column, Row } from '@/src/Adapters/Table'

interface Props<T> {
  rows: Row<T>[]
  columns: Column[]
}

export function Table<T>({ columns, rows }: Props<T>) {
  return (
    <div className="border w-fit rounded-2xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {columns.map(({ id, label }) => (
                <th key={id}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              return (
                <tr key={index}>
                  {columns.map(({ id, label }) => (
                    <td key={label}>{row[id as keyof T]}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
