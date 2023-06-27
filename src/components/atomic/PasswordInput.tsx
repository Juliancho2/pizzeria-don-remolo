import { MdPassword } from 'react-icons/md'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { InputHTMLAttributes, FC, useState } from 'react'
import { useField } from 'formik'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const PasswordInput: FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="w-full flex flex-col">
      <label className="label label-text">{label}</label>
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
          <MdPassword color="gray" />
        </div>
        <input
          className="w-full outline-none h-full pl-3.5"
          type={showPassword ? 'text' : 'password'}
          {...field}
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute top-1/2 right-2.5 -translate-y-1/2 border-0 bg-transparent cursor-pointer flex items-center"
        >
          {showPassword ? (
            <AiFillEyeInvisible size={20} color="gray" />
          ) : (
            <AiFillEye size={20} color="gray" />
          )}
        </button>
      </div>
      {meta.touched && meta.error ? (
        <span className="text-error text-sm">{meta.error}</span>
      ) : null}
    </div>
  )
}

export default PasswordInput
