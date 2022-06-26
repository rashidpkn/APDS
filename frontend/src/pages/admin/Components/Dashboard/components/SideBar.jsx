import React, { useState } from 'react'
import { Menu, MenuItem, ProSidebar, SubMenu, } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css';

function SideBar({ setOptions }) {
    const [collapes, setCollapes] = useState(true)
    return (
        <div className="sidebar h-full bg-black text-white " onMouseEnter={() => setCollapes(false)} onMouseLeave={() => setCollapes(true)}>
            <ProSidebar collapsed={collapes}>
                <Menu iconShape="square">
                    <MenuItem onClick={() => setOptions(0)}>Dashboard</MenuItem>
                    <SubMenu title={'Notification'}>
                        <MenuItem onClick={() => setOptions(1)} >ADD Notification</MenuItem>
                        <MenuItem onClick={() => setOptions(2)} >View All Notification</MenuItem>
                    </SubMenu>
                    <SubMenu title={'Product'}>
                        <MenuItem onClick={() => setOptions(3)}>Add Product</MenuItem>
                        <MenuItem onClick={() => setOptions(4)}>View Products</MenuItem>
                    </SubMenu>
                    <SubMenu title={'Shop'}>
                        <MenuItem onClick={() => setOptions(6)}>Add Shop</MenuItem>
                        <MenuItem onClick={() => setOptions(7)}>View All Shop</MenuItem>
                    </SubMenu>
                    <SubMenu title={'Feedback'}>
                        <MenuItem onClick={() => setOptions(9)}>View All FeedBack</MenuItem>
                        <MenuItem onClick={() => setOptions(10)}>Read Feedback</MenuItem>
                        <MenuItem onClick={() => setOptions(11)}>Replay Feedback</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default SideBar