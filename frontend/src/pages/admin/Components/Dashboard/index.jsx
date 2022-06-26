import React from 'react'
import { useState } from 'react'
import SideBar from './components/SideBar'
import DashBoard from './components/options/DashBoard'
import AddNotification from './components/options/notification/AddNotification'
import ViewNotification from './components/options/notification/ViewNotification'
import AddProduct from './components/options/product/AddProduct'
import ViewProduct from './components/options/product/ViewProduct'
import AddShop from './components/options/shop/AddShop'
import ViewShop from './components/options/shop/ViewShop'
import ViewFeedback from './components/options/feedback/ViewFeedback'
import ReadFeedBack from './components/options/feedback/ReadFeedBack'
import ReplayFeedBack from './components/options/feedback/ReplayFeedBack'


function Dashboard() {
    const [Options, setOptions] = useState(0)
    return (
        <div className='h-full w-full flex' >
            <SideBar setOptions={setOptions} />
            <div className="options h-full w-full flex justify-center items-center text-white text-lg">
                {Options === 0 && < DashBoard />}
                {Options === 1 && <AddNotification />}
                {Options === 2 && <ViewNotification />}
                {Options === 3 && <AddProduct />}
                {Options === 4 && <ViewProduct />}
                {Options === 6 && <AddShop />}
                {Options === 7 && <ViewShop />}
                {Options === 9 && <ViewFeedback />}
                {Options === 10 && <ReadFeedBack />}
                {Options === 11 && <ReplayFeedBack />}
            </div>
        </div>
    )
}

export default Dashboard