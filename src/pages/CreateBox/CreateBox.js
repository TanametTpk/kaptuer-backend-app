import React from 'react'
import styled from 'styled-components'
import BoxList from './BoxList'

const Container = styled.div`

    text-align: center;

    .back-btn {
        cursor: pointer;
        font-size: 18px;
    }

    .spacer{
        margin:28px 0 0 0;
    }

`

const CreateBox = (props) => {

    return (
        <Container>
            <h1 style={{fontWeight:"bold" , fontSize:"60px", textAlign:"center", margin:"5% 0 0 0", letterSpacing:"0.01em"}}>
                What box do you want ?
            </h1>
            <span className="back-btn" >Box is template system that you can add it fast and easy</span>
            <div className="spacer" />
            <BoxList />
        </Container>
    )
}

export default CreateBox
