import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Avatar, Button, Badge } from 'antd';
import Sidebar from "react-sidebar";
import { MdNotificationsNone } from 'react-icons/md'
import SideBar from './SideBar'

const btnColor = {
    display:"flex" ,
    justifyContent:"center" ,
    alignItems:"center",
    backgroundImage: "linear-gradient(87.74deg, #ED765E 1.63%, #FEA858 96.86%)",
    boxShadow: "0px 2px 4px rgba(252, 110, 81, 0.14), 0px 4px 5px rgba(252, 110, 81, 0.12), 0px 1px 10px rgba(252, 110, 81, 0.2)",
    border:"none",
    marginRight:"20px"
}

const index = (props) => {
    return (
        <div>
            <Sidebar
                sidebar={<SideBar />}
                docked={true}
                styles={{ sidebar: { background: "white", width:"240px" } }}
            >
                <Navbar bg="white" variant="light">
                    <Nav className="mr-auto" />

                    <Button style={btnColor} type="primary" shape="circle" icon="plus"/>
                    <div style={{marginRight: "20px"}}>
                        <Badge dot >
                            <MdNotificationsNone size="25px" fill="#C2CFE0" />
                        </Badge>
                    </div>
                    <Avatar src="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg"/>
                </Navbar>
                {props.children}
            </Sidebar>
        </div>
    )
}

export default index
