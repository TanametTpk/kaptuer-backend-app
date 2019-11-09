import React from 'react'
import { Menu, Card } from 'antd';

const CardMenu = ({menus, onClick}) => {

    const clickHandler = (e) => {
        if (onClick) onClick(e)
    }

    return (
        <Card style={{
            // height:"200px",
            height:`${menus.length * 62 + 20}px`,
            position:"sticky",
            top:"70px"
        }}>
            <Menu
                onClick={clickHandler}
                style={{color:"#334D6E" , display:"flex", flexDirection:"column", height:"100%"}}
                defaultSelectedKeys={[menus[0]]}
                mode="inline"
            >
                {menus.map((menu) => <Menu.Item key={menu}>{menu}</Menu.Item>)}
            </Menu>
        </Card>
    )
}

export default CardMenu