const AuthSidePanel = () => {
    return (
        <div className="w-1/2 flex justify-between align-middle flex-col bg-primary rounded-xl text-white p-5 max-lg:w-full max-lg:gap-y-5 max-md:rounded-none">
            <h1 className="font-light tracking-widest ">HealthyAI</h1>
            <div className=" flex flex-col gap-y-9 font-regular">
                <h3 className="text-7xl font-regular">Get all your medical doubts solved.</h3>
                <p className="text-md w-2/3 text-slate-200 leading-8">Discover answers and remidies about that mild headache that's been bugging you for weeks with blazingly fast AI generated results. </p>
            </div>
            <div></div>
        </div>
    )
}

export default AuthSidePanel