import { Link } from "react-router-dom"
import AuthSidePanel from "../AuthSidePanel/AuthSidePanel"
import { useState, useEffect } from "react"
const Signup = () => {

    const [isValidated, setIsValidated] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(16);
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [allergies, setAllergies] = useState("");
    const [phobias, setPhobias] = useState("");
    const [conditionPregnant, setConditionPregnant] = useState(false);
    const [conditionSmoker, setConditionSmoker] = useState(false);
    const [conditionDrinker, setConditionDrinker] = useState(false);

    const validateForm = (e) => {
        e.preventDefault();
        const newUserData = {
            name: name,
            age: age,
            email: email,
            password: password,
            gender: gender,
            allergies: allergies.split(","),
            phobias: phobias.split(","),
            pregnant: conditionPregnant,
            smoker: conditionSmoker,
            drinker: conditionDrinker
        }
        console.log(newUserData);
    }

    useEffect(() => {
        return () => {
            if (
                name !== ""
                &&
                age >= 1
                &&
                gender !== ""
                &&
                email !== ""
                &&
                password.length >= 8
            ) {
                setIsValidated(true);
            }
            else {
                setIsValidated(false)
            }
        }
    }, [name, age, gender, email, password])


    return (
        <div className="flex h-screen p-4 max-lg:flex-col max-lg:h-full max-md:p-0 max-sm:flex-col-reverse">
            <AuthSidePanel />
            <div className="h-full flex flex-col bg-white w-1/2  justify-center items-start gap max-lg:w-full">
                {/* <h1 className="font-normal text-white text-5xl ">Welcome back!</h1> */}
                <form onSubmit={validateForm} className="flex flex-col justify-evenly h-full items-start bg-white w-full p-5 max-lg:gap-y-12 max-sm:p-2" action="">
                    <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-4xl">Signup</h1>
                        <Link className="text-sm underline text-grey-100" to="/login">Already have an account?</Link>
                    </div>
                    <div className="flex gap-y-3 flex-col w-full">
                        <label className=" font-semibold text-xl text-gray-600 after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="name">Name</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} className=" placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 w-full rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm" type="text" id="name" placeholder="Health Wealth" />
                    </div>
                    <div className="flex justify-start w-1/2">
                        <div className="flex flex-col w-1/2 gap-y-3">
                            <label className=" font-semibold text-xl text-gray-600 after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="name">Age</label>
                            <input min={"16"} onChange={(e) => setAge(e.target.value)} value={age} className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 w-12 text-center rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm" type="number" id="age" placeholder="" />
                        </div>
                        <div className="flex w-full justify-center items-end after:content-['*'] after:ml-0.5 after:text-red-500">
                            <label>
                                <input onChange={() => setGender("m")} className="hidden peer" type="radio" id="m" name="gender" value="m" />
                                <div role={"button"} className=" bg-primary opacity-40 hover:opacity-80 rounded-md py-2 px-4 m-2 transition ease-in-out delay-350 cursor-pointer peer-checked:opacity-100"><img className="w-[20px] max-w-none" src="/male.svg" alt="" /></div>
                            </label>
                            <label>
                                <input onChange={() => setGender("f")} className="hidden peer" type="radio" id="f" name="gender" value="f" />
                                <div role={"button"} className=" bg-primary opacity-40 hover:opacity-80 rounded-md m-2 py-2 px-4 transition ease-in-out delay-350 cursor-pointer peer-checked:opacity-100"><img src="/female.svg" alt="" className="w-[20px] max-w-none" /></div>
                            </label>
                        </div>
                    </div>
                    <div className="flex w-full gap-x-5 max-md:flex-col max-md:gap-y-12">
                        <div className="flex gap-y-3 flex-col w-full">
                            <label className=" font-semibold text-xl text-gray-600 after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="email">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 w-full rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm" type="email" id="email" placeholder="For ex: healthy@ai.com" />
                        </div>
                        <div className="flex gap-y-3 flex-col w-full">
                            <label className=" font-semibold text-xl text-gray-600 after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="password">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 w-full rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm" type="password" autoComplete="false" id="password" placeholder="For ex: ••••••••••••" />
                        </div>
                    </div>
                    <div className="flex w-full gap-x-5 max-md:flex-col max-md:gap-y-12">
                        <div className="flex gap-y-3 flex-col w-1/2 max-md:w-full">
                            <label className=" font-semibold text-xl text-gray-600 " htmlFor="password">Allergies</label>
                            <input value={allergies} onChange={(e) => setAllergies(e.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 w-full rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm" type="text" id="allergies" placeholder="Type your allergies seperated by comma" />
                        </div>
                        <div className="flex gap-y-3 flex-col w-1/2  max-md:w-full">
                            <label className=" font-semibold text-xl text-gray-600" htmlFor="password">Phobias</label>
                            <input value={phobias} onChange={(e) => setPhobias(e.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 w-full rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm" type="text" id="phobias" placeholder="Type your phobias seperated by comma" />
                        </div>
                    </div>
                    <div className="flex w-full gap-x-2 max-sm:flex-col max-sm:gap-y-3 ">
                        <label htmlFor="pregnant">
                            <div>
                                <input onChange={(e) => e.target.checked ? setConditionPregnant(true) : setConditionPregnant(false)} id="pregnant" type="checkbox" className="checked:bg-blue-500 hidden peer" />
                                <div className="transition ease-in-out delay-350 px-2 py-1 bg-primary opacity-50 text-white rounded-md peer-checked:opacity-100 peer-checked:after:content-['x'] after:ml-3  after:text-white  cursor-pointer max-sm:py-3">Pregnant</div>
                            </div>
                        </label>
                        <label htmlFor="smoker">
                            <div>
                                <input onChange={(e) => e.target.checked ? setConditionSmoker(true) : setConditionSmoker(false)} id="smoker" type="checkbox" className="checked:bg-blue-500 hidden peer" />
                                <div className="transition ease-in-out delay-350 px-2 py-1 bg-primary opacity-50 text-white rounded-md peer-checked:opacity-100 peer-checked:after:content-['x'] after:ml-3  after:text-white  cursor-pointer max-sm:py-3">Smoker</div>
                            </div>
                        </label>
                        <label htmlFor="drinker">
                            <div>
                                <input onChange={(e) => e.target.checked ? setConditionDrinker(true) : setConditionDrinker(false)} id="drinker" type="checkbox" className="checked:bg-blue-500 hidden peer" />
                                <div className="transition ease-in-out delay-350 px-2 py-1 bg-primary opacity-50 text-white rounded-md peer-checked:opacity-100 peer-checked:after:content-['x'] after:ml-3 after:text-white  cursor-pointer max-sm:py-3">Drinker</div>
                            </div>
                        </label>
                    </div>
                    <Link to="/" className="w-full">
                        <button disabled={!isValidated} className="p-3 bg-primary text-white rounded-lg disabled:opacity-50 max-lg:w-full">CREATE ACCOUNT</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup