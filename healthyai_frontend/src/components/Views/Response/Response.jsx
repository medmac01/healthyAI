import React from 'react'
import { Link } from 'react-router-dom';
const Response = ({ response, remedies, info }) => {
    const optimizedResponse = response && response.response.split('\n');
    const optimizedRemedies = remedies && remedies.response.split('\n')
    const optimizedInfo = info && info.response.split('\n');

    const removeEmpty = (array) => {
        const arrayToAdd = []
        array.forEach((item) => {
            item !== "" && arrayToAdd.push(item);
        })
        array = arrayToAdd;
        return array;
    }


    return (
        <div className='text-left  flex flex-col items-center justify-between gap-y-8 p-5 rounded-lg max-lg:w-3/4 max-md:w-3/4 max-sm:w-full max-sm:h-full max-sm:rounded-none  h-screen '>
            <div className="text-left text-2xl font-bold">Based on your inputs, you might be having</div>
            <div className='w-full flex justify-center  gap-y-5'>
                {
                    optimizedResponse && removeEmpty(optimizedResponse).map((item) => {
                        return (
                            <div className='font-semibold text-lg bg-primary text-white mx-3 rounded-md p-2'>
                                {
                                    item !== "" && item
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex gap-x-5 justify-between items-start w-full '>
                <div className='flex flex-col w-full bg-gray-100 rounded-md p-3 gap-y-4'>
                    <div className="text-center text-2xl font-semibold">A little info about what might've happened</div>
                    {
                        info && <div className='text-left text-md '>{optimizedInfo}</div>
                    }
                </div>
                <div className='flex flex-col w-full bg-gray-100 rounded-md p-3 gap-y-4'>
                    <div className="text-center text-2xl font-bold">Some possible remedies</div>
                    <div className='w-full flex flex-col gap-y-5'>
                        {
                            optimizedRemedies && removeEmpty(optimizedRemedies).map((item) => {
                                return <div className='bg-primary p-2 text-white rounded-md w-fit'>{
                                    item !== "" && item
                                }</div>
                            })
                        }
                    </div>
                </div>
            </div>
            <Link className='flex w-full justify-center items-center' to="/checkup"> <button className="p-3 bg-primary text-white rounded-lg   disabled:opacity-50 max-lg:w-full">EDIT INPUTS</button></Link>
        </div >

    )
}

export default Response