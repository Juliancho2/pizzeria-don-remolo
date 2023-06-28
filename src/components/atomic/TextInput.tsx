import { FC, InputHTMLAttributes, ReactElement } from 'react'
import { useField } from 'formik'
import classNames from 'classnames'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  icon?: ReactElement
}

export const TextInput: FC<Props> = ({ label, icon, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="w-full flex flex-col">
      <label htmlFor="text-input" className="label label-text">
        {label}
      </label>
      <div
        className={`relative border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 ${
          meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {icon}
        </div>
        <input
          {...field}
          {...props}
          id="text-input"
          className={classNames('w-full outline-none h-full', {
            'pl-3.5': icon
          })}
        />
      </div>
      {meta.touched && meta.error ? (
        <span className="text-error text-sm">{meta.error}</span>
      ) : null}
    </div>
  )
}
