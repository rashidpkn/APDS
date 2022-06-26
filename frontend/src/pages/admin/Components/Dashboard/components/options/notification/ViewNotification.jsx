import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import backendIp from '../../../../../../../backendIp'
import { Table } from 'reactstrap'

function ViewNotification() {
    const [notifications, setNotifications] = useState([])
    useEffect(() => {
        const notificationFetch = async () => {
            setNotifications(await (await axios.get(`${backendIp}/notification`)).data)
        }
        notificationFetch()
    }, [])
    return (
        <div className="h-full w-full ">

            <Table responsive bordered className='text-white'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>ID</th>
                        <th>Notification</th>
                        <th>Delete Notification</th>
                    </tr>
                </thead>
                <tbody>
                    {notifications.map((e, index) => <TableRow key={index} index={index + 1} id={e.id} notification={e.notification} />)}
                </tbody>
            </Table>
        </div>
    )
}


function TableRow({ index, id, notification }) {
    const deleteNotification = () => {
        axios.patch(`${backendIp}/notification`, { id }).then(res => {
            if (res.data) {
                window.alert('Deleted')
            } else window.alert('Not Deleted')
        })
    }
    return (
        <tr>
            <td>{index}</td>
            <td>{id}</td>
            <td>{notification}</td>
            <td>
                <button className='border h-10 w-16' onClick={() => deleteNotification()}>Delete</button>
            </td>
        </tr>
    )
}



export default ViewNotification