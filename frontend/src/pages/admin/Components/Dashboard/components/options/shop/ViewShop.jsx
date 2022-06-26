import React from 'react'
import { useEffect } from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'
import backendIp from '../../../../../../../backendIp'
import { useState } from 'react'

function ViewShop() {
    const [shop, setShop] = useState([])
    useEffect(() => {
        axios.get(`${backendIp}/shop`).then(res => {
            setShop(res.data)
        })
    }, [])

    return (
        <Table className='text-white' bordered>
            <thead>
                <tr>
                    <th>SL</th>
                    <th>id</th>
                    <th>Ration Shop No</th>
                    <th>Ration Shop Name</th>
                    <th>Shop Keeper Name</th>
                    <th>Mobile No</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {shop.map((e, index) => <TableRow key={index} index={index} id={e.id} rationShopNo={e.rationShopNo} rationShopName={e.rationShopName} shopKeeperName={e.shopKeeperName} mobileNo={e.mobileNo} />)}
            </tbody>
        </Table>
    )
}

function TableRow({ index, id, rationShopNo, rationShopName, shopKeeperName, mobileNo }) {
    const deleteShop = () => {
        axios.patch(`${backendIp}/shop`, { rationShopNo }).then(res => {
            if (res.data) {
                window.alert("Shop is Deleted")
            }
            else window.alert("Shop is Not Deleted")
        })
    }
    return (
        <tr>
            <td>{index}</td>
            <td>{id}</td>
            <td>{rationShopNo}</td>
            <td>{rationShopName}</td>
            <td>{shopKeeperName}</td>
            <td>{mobileNo}</td>
            <td>
                <button className='border h-10 w-16' onClick={deleteShop}>Delete</button>
            </td>
        </tr>
    )
}

export default ViewShop