import { FC, InputHTMLAttributes } from 'react'
import { useField } from 'formik'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

export const TextInput: FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="w-full flex flex-col">
      <label htmlFor="text-input" className="label label-text">
        {label}
      </label>
      <input
        {...field}
        {...props}
        id="text-input"
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
