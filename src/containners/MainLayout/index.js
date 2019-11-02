import React, {useState} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Avatar, Button, Badge } from 'antd';
import Sidebar from "react-sidebar";
import { MdNotificationsNone } from 'react-icons/md'
import SideBar from './SideBar'
import {Menu, MenuItem, Fade} from '@material-ui/core'

const btnColor = {
    display:"flex" ,
    justifyContent:"center" ,
    alignItems:"center",
    backgroundImage: "linear-gradient(87.74deg, #ED765E 1.63%, #FEA858 96.86%)",
    boxShadow: "0px 2px 4px rgba(252, 110, 81, 0.14), 0px 4px 5px rgba(252, 110, 81, 0.12), 0px 1px 10px rgba(252, 110, 81, 0.2)",
    border:"none",
    marginRight:"20px"
}

const MainLayout = ({ user, ...props}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const open = Boolean(anchorEl2);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Sidebar
                sidebar={<SideBar />}
                docked={true}
                styles={{ sidebar: { background: "white", width:"240px" } }}
            >
                <Navbar bg="white" variant="light">
                    <Nav className="mr-auto" />

                    <Button style={btnColor} type="primary" shape="circle" icon="plus" onClick={(e) => setAnchorEl(e.currentTarget)} />
                    {/* <div style={{marginRight: "20px"}}>
                        <Badge dot >
                            <MdNotificationsNone size="25px" fill="#C2CFE0" onClick={(e) => {setAnchorEl2(e.currentTarget)}} />
                        </Badge>
                    </div> */}
                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf'}} src={user ? user.photo : ""} icon="user" />
                </Navbar>
                {props.children}
            </Sidebar>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                TransitionComponent={Fade}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                style={{marginTop:"30px"}}
            >
                <MenuItem onClick={() => setAnchorEl(null)}>Application</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>Channel</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>Box</MenuItem>
            </Menu>

        </div>
    )
}

export default MainLayout
