import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import backendIp from '../../../../../../../backendIp'

function AddShop() {
    const [shop, setShop] = useState({
        rationShopNo: undefined,
        rationShopName: undefined,
        shopKeeperName: undefined,
        mobileNo: undefined,
        password: undefined,
    })
    const addShop = () => {
        axios.post(`${backendIp}/shop`, shop).then(res => {
            if (res.data) {
                window.alert("Shop is added")
            } else window.alert('Shop is Not Added')
        })
    }
    return (
        <form onSubmit={e => { e.preventDefault(); addShop() }} className='flex flex-col   gap-10 w-[90%] md:w-[20%] text-black'>
            <input min={100} max={900} required type={'number'} value={shop.rationShopNo} onChange={e => setShop({ ...shop, rationShopNo: e.target.value })} placeholder={'Ration Shop No'} className='h-12 rounded-2xl focus:rounded-md text-center' />
            <input required type={'text'} value={shop.rationShopName} onChange={e => setShop({ ...shop, rationShopName: e.target.value })} placeholder={'Ration Shop Name'} className='h-12 rounded-2xl focus:rounded-md text-center' />
            <input required type={'text'} value={shop.shopKeeperName} onChange={e => setShop({ ...shop, shopKeeperName: e.target.value })} placeholder={'Shop Keeper Name'} className='h-12 rounded-2xl focus:rounded-md text-center' />
            <input min={1000000000} max={9999999999} required type={'number'} value={shop.mobileNo} onChange={e => setShop({ ...shop, mobileNo: e.target.value })} placeholder={'Mobile No'} className='h-12 rounded-2xl focus:rounded-md text-center' />
            <input type={'password'} value={shop.password} onChange={e => setShop({ ...shop, password: e.target.value })} placeholder={'Password'} className='h-12 rounded-2xl focus:rounded-md text-center' />
            <div className="justify-center flex">
                <button type='submit' className='border h-10 w-24 bg-white rounded-xl'>Add Shop</button>
            </div>
        </form>
    )
}

export default AddShop