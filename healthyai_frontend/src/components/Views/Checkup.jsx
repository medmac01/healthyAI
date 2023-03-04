import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Checkup = ({ setAcceptResponseFromCheckup, setAcceptRemediesResponseFromCheckup }) => {
    const [isValidated, setIsValidated] = useState(false)
    const [severity, setSeverity] = useState("");
    const [duration, setDuration] = useState("A few hours");
    const [frequency, setFrequency] = useState("All the time");
    const [prompt, setPrompt] = useState("");
    // const [apiResponse, setApiResponse] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (severity !== "" && prompt !== "") {
            setIsValidated(true)
        }
        else {
            setIsValidated(false)
        }
    }, [severity, duration, frequency, prompt])

    const validateForm = async (e) => {
        e.preventDefault();


        const checkupData = {
            message: prompt
        }
        const options = {
            method: 'POST',
            headers: {
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "message": checkupData,
            })
        }
        try {
            const checkupFetch = await fetch("http://127.0.0.1:8000/api/get_response/", options).then(response => response.json())
            const remediesFetch = await fetch("http://127.0.0.1:8000/api/get_remedies/", options).then((response => response.json()))
            // setApiResponse(checkupFetch)
            setAcceptResponseFromCheckup(checkupFetch)
            setAcceptRemediesResponseFromCheckup(remediesFetch)
            navigate("/response")
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex h-screen w-full items-center justify-center bg-primary'>
            <form onSubmit={validateForm} className='bg-white w-2/5  flex flex-col items-center justify-center gap-y-6 p-3 rounded-lg max-lg:w-3/4 max-md:w-3/4 max-sm:w-full max-sm:h-full max-sm:rounded-none'>
                <div className="text-center text-2xl font-bold">Explain what are you feeling?</div>
                <div className='w-full flex flex-col items-center p-3 gap-y-5'>
                    <div className='flex items-center justify-between gap-x-5 w-full'>
                        <div className='text-lg font-semibold'>Severity of pain</div>
                        <div className="flex  justify-center items-end ">
                            <label>
                                <input onChange={() => setSeverity("low")} className="hidden peer" type="radio" id="low" name="pain" value="low" />
                                <div role={"button"} className=" bg-primary opacity-40 hover:opacity-80 rounded-md py-2 px-4 m-2 transition ease-in-out delay-350 cursor-pointer peer-checked:opacity-100">☹️</div>
                            </label>
                            <label>
                                <input onChange={() => setSeverity("medium")} className="hidden peer" type="radio" id="medium" name="pain" value="medium" />
                                <div role={"button"} className=" bg-primary opacity-40 hover:opacity-80 rounded-md m-2 py-2 px-4 transition ease-in-out delay-350 cursor-pointer peer-checked:opacity-100">😖</div>
                            </label>
                            <label>
                                <input onChange={() => setSeverity("high")} className="hidden peer" type="radio" id="high" name="pain" value="high" />
                                <div role={"button"} className=" bg-primary opacity-40 hover:opacity-80 rounded-md m-2 py-2 px-4 transition ease-in-out delay-350 cursor-pointer peer-checked:opacity-100">😭</div>
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between w-full items-center'>
                        <div className='text-lg font-semibold'>Duration</div>
                        <select onChange={(e) => { setDuration(e.target.value) }} className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 w-fit rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm' name="duration" id="">
                            <option value="A few hours">A few hours</option>
                            <option value="One day">One day</option>
                            <option value="Three days">Three days</option>
                            <option value="One week">One week</option>
                            <option value="3 Weeks">3 Weeks</option>
                            <option value="More than or a month">More than or a month</option>
                        </select>
                    </div>
                    <div className='flex justify-between w-full items-center'>
                        <div className='text-lg font-semibold'>Frequency</div>
                        <select onChange={(e) => { setFrequency(e.target.value) }} className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 w-fit rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm' name="duration" id="">
                            <option value="All the time">All the time</option>
                            <option value="Frequent (almost all the time)">Frequent (almost all the time)</option>
                            <option value="Often (2-3 times per hour)">Often (2-3 times per hour)</option>
                            <option value="Rarely">Rarely</option>
                        </select>
                    </div>
                    <div>
                        <textarea onChange={(e) => setPrompt(e.target.value)} value={prompt} placeholder='Describe in your own words, be as precise and descriptive as possible!' name="prompt" id="" cols="200" rows="10" className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 w-full rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm resize-none'></textarea>
                    </div>
                    <button disabled={!isValidated} className="p-3 bg-primary text-white rounded-lg w-full disabled:opacity-50 max-lg:w-full">CHECK</button>
                </div>
            </form >
            {/* <div className='w-2/3 flex justify-center items-center '><img src="/doctor.svg" alt="" /> </div> */}
        </div >
    )
}

export default Checkup