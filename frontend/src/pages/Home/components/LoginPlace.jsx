import React from 'react'
import { useNavigate } from 'react-router-dom'


function LoginPlace() {

    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center justify-center h-[40vh] gap-[20%]'>
            <div className="admin">
                <button onClick={() => navigate('/admin')} className='border h-12 w-36 border-black rounded-3xl text-xl font-medium'>
                    Admin Login
                </button>
            </div>
            <div className="shop">
                <button onClick={() => navigate('/shop')} className='border h-12 w-36 border-black rounded-3xl text-xl font-medium'>
                    Shop Login
                </button>
            </div>
            <div className="user">
                <button onClick={() => navigate('/user')} className='border h-12 w-36 border-black rounded-3xl text-xl font-medium'>
                    User Login
                </button>
            </div>
        </div>
    )
}

export default LoginPlace