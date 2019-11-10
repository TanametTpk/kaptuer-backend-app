import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import CardMenu from './components/CardMenu'
import LoginSystem from './LoginSystem'
import ApiSystem from './ApiSystem'
import AttributeLayout from './Layouts/AttributeLayout'
import Api from '../../util/api'
import { useHistory } from 'react-router-dom'

const Container = styled.div`

    display: grid;
    grid-template-columns: 2fr 10fr;
    grid-gap: 5%;
    padding: 20px;

`

let loginMenus = [ "Usage", "Attributes" ]
let apiMenus = ["Schemas"]

const LoginBox = ({menu, changeRoute, ...props}) => {

    const makeRoute = () => {

        if (menu === "Usage" || !menu) return <LoginSystem {...props} />
        if (menu === "Attributes") return <AttributeLayout />

    }

    return(
        <>
            <CardMenu menus={loginMenus} onClick={changeRoute} />
            {makeRoute()}
        </>
    )
}

const ApiBox = ({menu, changeRoute, ...props}) => {

    const makeRoute = () => {

        if (menu === "Schemas" || !menu) return <ApiSystem {...props} />

    }

    return(
        <>
            <CardMenu menus={apiMenus} onClick={changeRoute} />
            {makeRoute()}
        </>
    )
}

const BoxSettingController = (props) => {

    let [ menu, setMenu ] = useState(null)
    let history = useHistory()
    let [ box, setBox ] = useState({})

    useEffect(() => {

        let boxId = props.match.params.boxId
        Api.app.getBox(boxId, () => {
            history.push("/")
        }).then((targetBox) => {
            
            if (!targetBox) return
            setBox(targetBox.data)

        })

    }, [])

    const changeRoute = (value) => {

        setMenu(value.key)

    }

    return (
        <Container>
            {
                box.type && (
                    box.type === "api" ? 
                    <ApiBox menu={menu} changeRoute={changeRoute} {...props} />
                    :
                    <LoginBox menu={menu} changeRoute={changeRoute} {...props} />
                )
            }
        </Container>
    )
}

export default BoxSettingController