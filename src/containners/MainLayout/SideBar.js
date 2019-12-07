import React from 'react'
// import {Navbar, Nav} from 'react-bootstrap'
import { Menu } from 'antd';
// import Sidebar from "react-sidebar";
import { Divider } from '@material-ui/core'
import { MdDashboard, MdMailOutline } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { FiMessageSquare } from 'react-icons/fi'

const { SubMenu } = Menu;

const size = "20px"

const SideBar = ({onClick}) => {

    const clickHandler = (e) => {
        if (onClick) onClick(e)
    }

    return (
        <Menu
            onClick={clickHandler}
            style={{ display:"flex", flexDirection:"column", height:"100%"}}
            defaultSelectedKeys={['dashboard']}
            theme="dark"
            mode="inline"
        >
            <h2 style={{color:"#109CF1", padding: '1px 24px', marginBottom:"8px"}} >kaptuer</h2>
            <Divider />

            <Menu.Item key="dashboard"> <MdDashboard size={size} /> Dashboard</Menu.Item>
            <SubMenu
                key="mini-app"
                title={
                <span>
                    <span>Mini App</span>
                </span>
                }
            >
                <Menu.Item key="noter">Noter</Menu.Item>
            </SubMenu>
            {/* <Menu.Item key="profile"> <AiOutlineUser size={size}  /> Profile</Menu.Item>
            <Menu.Item key="rf"> <FiMessageSquare size={size} /> Reports & feedbacks</Menu.Item> */}

            {/* <Divider style={{marginTop:"auto"}} /> */}
            {/* <Menu.Item key="contact"><MdMailOutline size={size} /> Contact us</Menu.Item> */}
        </Menu>
    )
}

export default SideBar
