import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/home')
  }
  return (
    <div className="flex flex-col w-screen h-screen justify-around">
      <header className="w-full h-16 flex flex-row items-center justify-center text-2xl font-bold shadote">
        <h1 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          Recipes Hub
        </h1>
      </header>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="gap-3 flex flex-col items-center h-[40%]"
      >
        <label className="flex flex-col">
          Email
          <input className="border border-black rounded-md" type="text" />
        </label>
        <label className="flex flex-col">
          Senha
          <input className="border border-black rounded-md" type="password" />
        </label>

        <button className="rounded-md border-2 border-black p-2 w-full max-w-[250px]">
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default Login