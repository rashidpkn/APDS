import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import backendIp from '../../../backendIp'
function Notification() {
    const [notification, setNotification] = useState([])
    useEffect(() => {
        axios.get(`${backendIp}/notification`).then(res => {
            setNotification(res.data)
        })
    }, [])

    return (
        <div className='flex flex-col items-center w-full gap-5'>
            <span className='text-4xl font-semibold'>Notification</span>
            <ul className='flex flex-col gap-4'>
                {/* // eslint-disable-next-line  */}
                {notification.map(e => <NotificationList key={e.id} notification={e.notification} />)}
            </ul>
        </div>
    )
}

export default Notification

function NotificationList({ notification }) {
    return (
        <li className='h-12 border border-black rounded-2xl flex justify-center items-center w-[90vw]'>{notification}</li>
    )
}

