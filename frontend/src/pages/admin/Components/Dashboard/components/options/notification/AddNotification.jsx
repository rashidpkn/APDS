import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import backendIp from '../../../../../../../backendIp'
import { setNotification } from '../../../../../../../redux/slices/notification'

function AddNotification() {
    const { notification } = useSelector(state => state.notification)
    const dispatch = useDispatch()
    document.title = 'Add Notification'
    const addNotification = () => {
        if (notification) {
            axios.post(`${backendIp}/notification`, { notification }).then(res => {
                if (res.data) {
                    window.alert('Notification is added')
                } else window.alert('Notification is not added')
            })
        } else window.alert('Enter any Notifacation')
    }
    return (

        <form className='text-black flex flex-col gap-10 w-[90%] md:w-[30%] items-center ' onSubmit={e => { e.preventDefault(); addNotification() }}>
            <textarea required className='text-center w-full' placeholder='Add Notification' value={notification} onChange={e => dispatch(setNotification(e.target.value))} ></textarea>
            <button type="submit" className='bg-white  rounded-xl h-10 w-40'>Add Notification</button>
        </form>

    )
}

export default AddNotification