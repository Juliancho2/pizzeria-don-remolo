import * as Yup from 'yup'
import { Form, Formik } from 'formik'

import { mutation } from '@/src/utilities/react-query'
import { LoginService } from '@/src/services/Auth/login'
import { TextInput } from '@/src/components/atomic/TextInput'
import { Logo } from '@/src/components/atomic/Logo'
import { Button } from '@/src/components/atomic/Button'

const Validations = Yup.object({
  email: Yup.string().required('Este campo es requerido').email(),
  password: Yup.string().required('Este campo es requerido')
})
interface IData {
  email: string
  password: string
  id: number
}

const SigninPage = () => {
  const { mutate, data, error, isLoading } = mutation<
    IData,
    {
      email: string
      password: string
    }
  >(
    {
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST'
    },
    LoginService
  )

  console.log({ data: data?.email, error, isLoading })

  return (
    <div className="h-screen w-[90%] mx-auto">
      <div className="flex justify-center items-center h-full">
        <div className="shadow-md rounded-sm w-[450px] h-fit flex flex-col p-10 items-center justify-between">
          <Logo widht={200} height={200} />
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Validations}
            onSubmit={(values: { email: string; password: string }) =>
              mutate(values)
            }
          >
            <Form className="w-full">
              <div className="flex flex-col gap-3">
                <TextInput
                  name="email"
                  type="email"
                  label="Correo electrónico"
                />
                <TextInput name="password" type="password" label="Contraseña" />
                <Button
                  styles={`btn ${isLoading && 'btn-disabled'} `}
                  type="submit"
                  isLoading={isLoading}
                >
                  Iniciar sesión
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default SigninPage
