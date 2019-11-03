import React from 'react'
import styled from 'styled-components'
import {Card } from '../../components/Card'
import {MdKeyboardArrowLeft, MdClose} from 'react-icons/md'

const Container = styled.div`

    width:100vw;
    height:100vh;

    .content {
        padding:5% 10% 5%;
    }

`

const FormLayout = (props) => {
    return (
        <Container>
            <div className="content">
                <Card style={{padding:"30px"}}>
                    {props.children}
                </Card>
            </div>
            <MdKeyboardArrowLeft size="36px" style={{position:"absolute" , top:"20px" , left:"20px"}} />
            <MdClose size="36px" style={{position:"absolute" , top:"20px" , right:"20px"}} />
        </Container>
    )
}

export default FormLayout
