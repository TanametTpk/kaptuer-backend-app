import React from 'react'
import styled from 'styled-components'
import CardMenu from './components/CardMenu'
import LoginSystem from './LoginSystem'

const Container = styled.div`

    display: grid;
    grid-template-columns: 2fr 10fr;
    grid-gap: 5%;
    padding: 20px;

`

const BoxSettingController = (props) => {

    const makeRoute = () => {

        return <LoginSystem />

    }

    return (
        <Container>
            <CardMenu />
            {makeRoute()}
        </Container>
    )
}

export default BoxSettingController