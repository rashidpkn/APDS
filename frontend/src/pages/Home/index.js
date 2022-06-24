import React from 'react'
import LoginPlace from './components/LoginPlace'
import NavBar from './components/NavBar'
import Notification from './components/Notification'

function Home() {
    document.title = 'APDS Home'
    return (
        <div className='home'>
            <NavBar />
            <LoginPlace />
            <Notification />
        </div>
    )
}

export default Home