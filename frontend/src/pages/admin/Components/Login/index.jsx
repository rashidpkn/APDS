import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setUsername, setPassword, login } from '../../../../redux/slices/admin'
import backendIp from '../../../../backendIp'
function Login() {
    document.title = 'APDS Admin Login'
    const dispatch = useDispatch()
    const { username, password } = useSelector(state => state.admin)
    const Checklogin = async () => {
        if (username && password) {
            const data = await (await axios.post(`${backendIp}/admin/login`, { username, password })).data
            if (data) {
                dispatch(login())
            } else window.alert('Please Check Your Username and Password')
        } else window.alert('Please Enter Both Username and Password')
    }
    return (
        <div className='h-full w-full flex justify-center items-center '>
            <div className="loginForm w-full h-[90%] md:w-1/4 md:h-[70%] border rounded-3xl">
                <form className='flex flex-col justify-center items-center h-full gap-10' onSubmit={e => { e.preventDefault(); Checklogin() }}>
                    <input required onChange={e => dispatch(setUsername(e.target.value))} value={username} className='h-12 w-[70%] text-center rounded-xl focus:rounded-md duration-200' placeholder='Username' type='text' />
                    <input required onChange={e => dispatch(setPassword(e.target.value))} value={password} className='h-12 w-[70%] text-center rounded-xl focus:rounded-md duration-200' placeholder='Password' type='password' />
                    <button className='h-10 bg-white w-24 rounded-lg' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login