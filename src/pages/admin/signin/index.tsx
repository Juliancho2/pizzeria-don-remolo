'use client'

import * as Yup from 'yup'
import useSWRMutation from 'swr/mutation'
import Image from 'next/image'
import { Form, Formik } from 'formik'

import cookiesManager from '@/src/utilities/cookiesManager'
import { SigninService } from '@/src/services/Auth/signin'
import { TextInput } from '@/src/components/atomic/TextInput'
import { Button } from '@/src/components/atomic/Button'
import { axiosInstance } from '@/src/axiosInstance/instance'

const validations = Yup.object({
  email: Yup.string()
    .required('Este campo es requerido')
    .email('Ingresa un correo valido')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
      message: 'Ingresa un correo valido',
      excludeEmptyString: true
    }),
  password: Yup.string().required('Este campo es requerido')
})

export const saludo = () => {
  return fetch('/api/admin/signin').then(resp => resp.json())
}

const SigninPage = () => {
  const { trigger, isMutating } = useSWRMutation('/posts', SigninService)

  return (
    <div className="border shadow-sm w-[400px] h-[500px] flex flex-col gap-5 justify-center items-center p-10">
      <Image src="/assets/img/logo.png" width={200} height={200} alt="Logo" />
      <div className="w-full">
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={validations}
          onSubmit={(
            values: { email: string; password: string },
            { resetForm }
          ) =>
            trigger(values).then(data => {
              cookiesManager.saveInCookies('token', JSON.stringify(data))
              resetForm()
            })
          }
        >
          <Form className="flex flex-col gap-6">
            <TextInput type="email" name="email" placeholder="Correo" />
            <TextInput
              type="password"
              name="password"
              placeholder="Contraseña"
            />
            <Button className="btn" type="submit" loading={isMutating}>
              Iniciar Sesión
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default SigninPage
