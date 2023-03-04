import React from 'react'
import { Link } from 'react-router-dom'
const AppView = () => {
    return (
        <div className='flex w-screen h-screen p-3 gap-x-8'>
            <div className='h-full w-1/9 p-3 flex items-start justify-between bg-primary rounded-md'>
                <div className='flex justify-between items-center w-full flex-col gap-y-3'>
                    <button className='font-light tracking-widest text-white'>HealthyAI</button>
                    <Link to="/checkup" className='text-3xl bg-white w-full text-center p-3 rounded-md text-primary font-bold'>+</Link>
                </div>
            </div>
            <div className='w-8/9'>
                <div className='text-3xl font-bold'>Dashboard</div>
            </div>
        </div>
    )
}

export default AppView