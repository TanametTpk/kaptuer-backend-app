import React, {useState} from 'react'
import styled from 'styled-components'
import CardMenu from './components/CardMenu'
import LoginSystem from './LoginSystem'
import AttributeLayout from './Layouts/AttributeLayout'

const Container = styled.div`

    display: grid;
    grid-template-columns: 2fr 10fr;
    grid-gap: 5%;
    padding: 20px;

`

let menus = [ "Usage", "Attributes" ]

const BoxSettingController = (props) => {

    let [ menu, setMenu] = useState(menus[1])

    const makeRoute = () => {

        if (menu === "Usage") return <LoginSystem />
        if (menu === "Attributes") return <AttributeLayout />

    }

    const changeRoute = (value) => {

        setMenu(value.key)

    }

    return (
        <Container>
            <CardMenu menus={menus} onClick={changeRoute} />
            {makeRoute()}
        </Container>
    )
}

export default BoxSettingController