import { FC, InputHTMLAttributes } from 'react'
import { useField } from 'formik'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export const TextInput: FC<Props> = ({ ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="w-full flex flex-col">
      <input
        {...field}
        {...props}
        className={`border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 ${
          meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {meta.touched && meta.error ? (
        <span className="text-error text-sm">{meta.error}</span>
      ) : null}
    </div>
  )
}
