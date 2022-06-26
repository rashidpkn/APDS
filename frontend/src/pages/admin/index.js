import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
function Admin() {
    document.title = 'APDS Admin'
    const { isLogin } = useSelector(state => state.admin)
    return <div className='Admin bg-blue-900 h-[100vh] w-full'>
        {isLogin ? <Dashboard /> : <Login />}
    </div>
}

export default Admin