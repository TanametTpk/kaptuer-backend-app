import React from 'react'
import {EmptyBox} from '../../../asset/svg'
import { Button } from 'antd';
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const EmptyAppComp = ({onClick}) => {
    return (
        <Container >
            <img src={EmptyBox} style={{width:"30vh",height:"30vh"}} alt="empty" />
            <h1 style={{color:"#9E9E9E", margin:"20px 0"}}>No Applications yet</h1>
            <Button style={{
                width:"25vh" ,
                background:"linear-gradient(77.52deg, #ED765E 1.63%, #FEA858 96.86%)" ,
                border:"none" ,
                boxShadow:"0px 2px 4px rgba(252, 110, 81, 0.14), 0px 4px 5px rgba(252, 110, 81, 0.12), 0px 1px 10px rgba(252, 110, 81, 0.2)"}}
                type="primary"
                shape="round"
                size="large"
                onClick={onClick}
            >
                CREATE APP
            </Button>
        </Container>
    )
}

export default EmptyAppComp
