import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Table } from 'reactstrap'
import backendIp from '../../../../../../../backendIp'

function ViewProduct() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`${backendIp}/product`).then(res => {
            setProduct(res.data)
        })
    }, [])

    return (
        <Table className='w-full text-white ' bordered>
            <thead>
                <tr>
                    <th>SL</th>
                    <th>id</th>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {product.map((e, index) => <TableRow key={index} index={index + 1} id={e.id} productId={e.productId} productName={e.productName} category={e.category} quantity={e.quantity} unitPrice={e.unitPrice} />)}
            </tbody>
        </Table>
    )
}

function TableRow({ index, id, productId, productName, category, quantity, unitPrice }) {
    const deleteProduct = () => {
        axios.patch(`${backendIp}/product`, { productId }).then(res => {
            if (res.data) {
                window.alert('deleted')
            } else window.alert('Not Deleted')
        })
    }
    return (
        <tr>
            <td>{index}</td>
            <td>{id}</td>
            <td>{productId}</td>
            <td>{productName}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>{unitPrice}</td>
            <td>
                <button className='border h-10 w-16' onClick={deleteProduct}>Delete</button>
            </td>
        </tr>
    )
}


export default ViewProduct