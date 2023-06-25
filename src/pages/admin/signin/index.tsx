import * as Yup from 'yup'
import Image from 'next/image'
import { Form, Formik } from 'formik'

import { TextInput } from '@/src/components/atomic/TextInput'
import { Logo } from '@/src/components/atomic/Logo'
import { Button } from '@/src/components/atomic/Button'

const Validations = Yup.object({
  email: Yup.string().required('Este campo es requerido').email(),
  password: Yup.string().required('Este campo es requerido')
})

const SigninPage = () => {
  return (
    <div className="h-screen w-[90%] mx-auto">
      <div className="flex justify-center items-center h-full">
        <div className="shadow-md rounded-sm w-[500px] h-[500px] flex flex-col p-10 items-center justify-between">
          <Logo widht={200} height={200} />
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Validations}
            onSubmit={(values: unknown) => console.log(values)}
          >
            <Form className="w-full">
              <div className="flex flex-col gap-5">
                <TextInput
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                />
                <TextInput
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                />
                <Button styles="btn">Iniciar sesión</Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default SigninPage
