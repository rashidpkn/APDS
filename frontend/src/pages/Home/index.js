import React from 'react'
import LoginPlace from './components/LoginPlace'
import NavBar from './components/NavBar'
import Notification from './components/Notification'

function Home() {
    document.title = 'APDS Home'
    return (
        <div className='home h-[100vh] w-full'>
            <NavBar />
            <div className="hidden md:block h-[30%] w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/image/home/banner.jpg')" }}>
            </div>
            <div className='block md:flex justify-center w-full h-[60%]'>
                <LoginPlace />
                <Notification />
            </div>
        </div>
    )
}

export default Home