const SigninPage = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="shadow-md rounded-sm w-[600px] h-[350px] flex flex-col gap-4 p-6 justify-center">
          <h1 className="text-4xl font-bold text-center mb-10">
            Inicio de Sesión
          </h1>
          <div className="flex flex-col">
            <label htmlFor="email">Correo: </label>
            <input type="text" id="email" className="border rounded-sm py-1" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Contraseña: </label>
            <input
              type="text"
              id="password"
              className="border rounded-sm py-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SigninPage
