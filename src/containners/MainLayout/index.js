import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Avatar, Button } from 'antd';
import Sidebar from "react-sidebar";
import SideBar from './SideBar'
import Notification from './Notification'
import { useAnchorElement } from '../../util/hooks'
import Menu from './Menu'

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

    const [addPopOver, addPopOpen, addPopClose] = useAnchorElement();
    const [userPopOver, userPopOpen, userPopClose] = useAnchorElement();

    return (
        <div>
            <Sidebar
                sidebar={<SideBar />}
                docked={true}
                transitions={false}
                styles={{ sidebar: { background: "white", width:"240px" } }}
            >
                <Navbar bg="white" variant="light">
                    {/* Nav make button float to the right  */}
                    <Nav className="mr-auto" />
                    <Button style={btnColor} type="primary" shape="circle" icon="plus" onClick={addPopOpen} />
                    <Notification />
                    <Avatar onClick={userPopOpen} style={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor:"pointer"}} src={user ? user.photo : ""} icon="user" />
                </Navbar>
                {props.children}
            </Sidebar>

            {/* add button */}
            <Menu 
                anchor={addPopOver}
                close={addPopClose}
                onClick={(e) => console.log(e)}
                menus={[{name:"Application"} , {name:"Channel"}, {name:"Box"}]}
            />

            {/* user button */}
            <Menu 
                anchor={userPopOver}
                close={userPopClose}
                onClick={(e) => console.log(e)}
                menus={[{name:"Logout"}]}
            />

        </div>
    )
}

export default MainLayout
