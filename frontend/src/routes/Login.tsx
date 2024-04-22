import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/home')
  }
  return (
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
  )
}

export default Login;