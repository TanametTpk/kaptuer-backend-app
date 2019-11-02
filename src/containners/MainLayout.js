import React from 'react'
import {Navbar, FormControl,Button ,Form, Nav} from 'react-bootstrap'

const index = (props) => {
    return (
        <div>
            <Navbar bg="light" variant="light" >

                <Navbar.Brand href="/"><div style={{color:"#109CF1"}}>Kaptuer</div></Navbar.Brand>
                <Nav className="mr-auto" />

                <Button variant="outline-primary">Search</Button>
            </Navbar>
            {props.children}
        </div>
    )
}

export default index
