import * as Yup from 'yup'
import { AiOutlineMail } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { Form, Formik, FormikHelpers } from 'formik'

import { mutation } from '@/src/utilities/react-query'
import cookiesManager from '@/src/utilities/cookiesManager'
import { LoginService } from '@/src/services/Auth/login'
import { TextInput } from '@/src/components/atomic/TextInput'
import PasswordInput from '@/src/components/atomic/PasswordInput'
import { Logo } from '@/src/components/atomic/Logo'
import { Button } from '@/src/components/atomic/Button'

const Validations = Yup.object({
  email: Yup.string().required('Este campo es requerido').email(),
  password: Yup.string().required('Este campo es requerido')
})

interface InitialValues {
  email: string
  password: string
}

const initialValues: InitialValues = {
  email: '',
  password: ''
}

const SigninPage = () => {
  const router = useRouter()
  const { mutateAsync, isLoading, data } = mutation<
    {
      token: string
    },
    InitialValues
  >(
    {
      url: '/auth/signin',
      method: 'POST'
    },
    LoginService
  )

  return (
    <div className="h-screen w-[90%] mx-auto">
      <div className="flex justify-center items-center h-full">
        <div className="shadow-md rounded-sm w-[450px] h-fit flex flex-col p-10 items-center justify-between">
          <Logo widht={200} height={200} />
          <Formik
            initialValues={initialValues}
            validationSchema={Validations}
            onSubmit={(
              values: { email: string; password: string },
              { resetForm }: FormikHelpers<InitialValues>
            ) =>
              mutateAsync(values).then(({ token }) => {
                cookiesManager.saveInCookies('token', token)
                router.push('/admin')
                resetForm()
              })
            }
          >
            <Form className="w-full">
              <div className="flex flex-col gap-3">
                <TextInput
                  name="email"
                  type="email"
                  label="Correo"
                  icon={<AiOutlineMail color="gray" />}
                />
                <PasswordInput name="password" label="Contraseña" />
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
