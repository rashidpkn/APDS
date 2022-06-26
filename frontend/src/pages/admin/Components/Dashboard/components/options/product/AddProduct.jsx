import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import backendIp from '../../../../../../../backendIp'

function AddProduct() {
    const [product, setProduct] = useState({
        productId: undefined,
        productName: '',
        category: undefined,
        quantity: undefined,
        unitPrice: undefined
    })
    const addProduct = () => {
        axios.post(`${backendIp}/product`, product).then(res => {
            if (res.data) {
                window.alert('Product is added')
            } else window.alert('Product is not added')
        })
    }
    return (
        <div className='h-full w-full'>
            <form className='flex flex-col text-black gap-10 justify-center items-center h-full' onSubmit={e => { e.preventDefault(); addProduct() }}>
                <input min={100} max={999} value={product.productId} onChange={e => setProduct({ ...product, productId: e.target.value })} required placeholder='Product Id' className='h-12 w-[90%] md:w-[20%] rounded-xl text-center' type="number" />
                <input value={product.productName} onChange={e => setProduct({ ...product, productName: e.target.value })} required placeholder='Product Name' className='h-12 w-[90%] md:w-[20%] rounded-xl text-center' type="text" />
                <input min={1} max={4} value={product.category} onChange={e => setProduct({ ...product, category: e.target.value })} required placeholder='Category' className='h-12 w-[90%] md:w-[20%] rounded-xl text-center' type="number" />
                <input min={1} max={100} value={product.quantity} onChange={e => setProduct({ ...product, quantity: e.target.value })} required placeholder='Quantity' className='h-12 w-[90%] md:w-[20%] rounded-xl text-center' type="number" />
                <input value={product.unitPrice} onChange={e => setProduct({ ...product, unitPrice: e.target.value })} placeholder='Unit Price' className='h-12 w-[90%] md:w-[20%] rounded-xl text-center' type="number" />
                <button type="submit" className='border h-10 w-32 rounded-xl bg-white text-black'>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct