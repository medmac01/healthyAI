import React from 'react'
import { Link } from 'react-router-dom';
const Response = ({ response }) => {
    const optimizedResponse = response.response.split('\n');
    console.log(optimizedResponse);
    return (
        <div className='flex h-screen w-full items-center justify-center bg-primary'>
            <div className='bg-white w-2/5  flex flex-col items-center justify-center gap-y-6 p-3 rounded-lg max-lg:w-3/4 max-md:w-3/4 max-sm:w-full max-sm:h-full max-sm:rounded-none'>
                <div className="text-center text-2xl font-bold">Based on your inputs, you might be having</div>
                <div className='w-full flex flex-col gap-y-5'>
                    {
                        optimizedResponse.map((item) => {
                            return <div className='font-semibold text-lg'>{item !== "" && item}</div>
                        })
                    }
                </div>
                <Link className='w-full' to="/checkup"> <button className="p-3 bg-primary text-white rounded-lg w-full disabled:opacity-50 max-lg:w-full">EDIT INPUTS</button></Link>
            </div >
            {/* <div className='w-2/3 flex justify-center items-center '><img src="/doctor.svg" alt="" /> </div> */}
        </div >
    )
}

export default Response