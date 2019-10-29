import React, { useState } from 'react'
import { Header, HeaderItem, HeaderLogo } from '../components'
import { Navbar as Nav, Button, Dropdown } from 'react-bootstrap'
import { useWindowsWidth, useScrollY } from '../util/hooks'

const menu = [
    {
        title: 'about',
    },
    {
        title: 'pricing',
    },
    {
        title: 'contact',
    }
]

export default function Navbar(props) {
    let [isActive, setActive] = useState(false)
    let desktopSize = useWindowsWidth();
    let posY = useScrollY();
    let activeClass = isActive && desktopSize < 768 ? "active" : ""
    let desktopClass = desktopSize >= 768 ? "desktop" : "";

    return (
        <Nav>
            <Nav.Brand>Kaptuer</Nav.Brand>
            <Nav.Toggle />
            <Nav.Collapse className="justify-content-end">

                {/* <Nav.Text>Hello, {props.name} </Nav.Text> */}
                <Dropdown>
                    <Dropdown.Toggle split variant="light" as="a" />

                    <Dropdown.Menu style={{right: "0"}}>
                        {/* <Dropdown.Item as={Button}>Profile</Dropdown.Item> */}
                        <Dropdown.Item as={Button} onClick={props.logout}>logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav.Collapse>
        </Nav>
    )
}
