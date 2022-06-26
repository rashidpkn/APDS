import React from 'react'
import './navBar.css'
function NavBar() {
    return (
        <nav className='flex gap-[50%] md:gap-[80%] justify-center items-center w-full h-[10%] navBar'>
            <div className="leftpart">Logo</div>
            <div className="2ndpart flex flex-col justify-center items-center">
                <h3 className='text-4xl font-semibold'>APDS</h3>
                <h6 className='text-lg font-medium'>APDS</h6>
            </div>
        </nav>
    )
}

export default NavBar