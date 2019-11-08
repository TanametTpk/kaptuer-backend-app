import React from 'react'
import { Menu, Card } from 'antd';

const CardMenu = ({onClick}) => {

    const clickHandler = (e) => {
        if (onClick) onClick(e)
    }

    return (
        <Card>
            <Menu
                onClick={clickHandler}
                style={{color:"#334D6E" , display:"flex", flexDirection:"column", height:"100%"}}
                defaultSelectedKeys={['usage']}
                mode="inline"
            >
                <Menu.Item key="usage">Usage</Menu.Item>
                <Menu.Item key="pat">Pattern</Menu.Item>
                <Menu.Item key="att">Attributes</Menu.Item>

            </Menu>
        </Card>
    )
}

export default CardMenu