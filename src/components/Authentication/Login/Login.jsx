import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import AuthSidePanel from "../AuthSidePanel/AuthSidePanel"
const Login = () => {

    const [isValidated, setIsValidated] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const validateForm = () => {

    }
    useEffect(() => {
        if (email !== "" && password.length >= 8) {
            setIsValidated(true)
        }
        else {
            setIsValidated(false)
        }
    }, [email, password])

    return (
        <div className="flex h-screen p-4 max-lg:flex-col max-lg:h-full max-md:p-0 max-sm:flex-col-reverse">
            <AuthSidePanel />
            <div className="h-full flex flex-col bg-white w-1/2  justify-center items-start gap max-lg:w-full">
                {/* <h1 className="font-normal text-white text-5xl ">Welcome back!</h1> */}
                <form onSubmit={validateForm} className="flex flex-col justify-evenly h-full items-start bg-white w-full p-5 max-lg:gap-y-12 max-sm:p-2" action="">
                    <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-4xl">Login</h1>
                        <Link className="text-sm underline text-grey-100" to="/signup">New here?</Link>
                    </div>
                    <div className="flex flex-col gap-y-8 w-full gap-x-5 max-md:flex-col max-md:gap-y-12">
                        <div className="flex gap-y-3 flex-col w-full">
                            <label className=" font-semibold text-xl text-gray-600 after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="email">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 w-full rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm" type="email" id="email" placeholder="For ex: healthy@ai.com" />
                        </div>
                        <div className="flex gap-y-3 flex-col w-full">
                            <label className=" font-semibold text-xl text-gray-600 after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="password">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 w-full rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm" type="password" id="password" placeholder="For ex: ••••••••••••" />
                        </div>
                    </div>
                    <Link to="/" className="w-full">
                        <button disabled={!isValidated} className="p-3 bg-primary text-white rounded-lg disabled:opacity-50 max-lg:w-full">LOGIN</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login