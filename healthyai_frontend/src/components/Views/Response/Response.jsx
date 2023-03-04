import React from 'react'
import { Link } from 'react-router-dom';
const Response = ({ response, remedies }) => {
    const optimizedResponse = response && response.response.split('\n');
    const optimizedRemedies = remedies && remedies.response.split('\n')

    return (
        <div className='flex w-full items-center justify-center bg-white'>
            <div className='text-left w-3/4 flex flex-col items-center justify-center gap-y-3 p-3 rounded-lg max-lg:w-3/4 max-md:w-3/4 max-sm:w-full max-sm:h-full max-sm:rounded-none'>
                <div className="text-left text-2xl font-bold">Based on your inputs, you might be having</div>
                <div className='w-full flex flex-col gap-y-5'>
                    {
                        optimizedResponse && optimizedResponse.map((item) => {
                            return <div className='font-semibold text-lg'>{item !== "" && item}</div>
                        })
                    }
                </div>
                <div className="text-center text-2xl font-bold">Some possible remedies</div>
                <div className='w-full flex flex-col gap-y-5'>
                    {
                        optimizedRemedies && optimizedRemedies.map((item) => {
                            return <div className='font-semibold text-lg'>{item !== "" && item}</div>
                        })
                    }
                </div>
                <Link className='w-full' to="/checkup"> <button className="p-3 bg-primary text-white rounded-lg w-full disabled:opacity-50 max-lg:w-full">EDIT INPUTS</button></Link>
            </div >
        </div >
    )
}

export default Response