import React from 'react'
import {Menu, MenuItem, Fade} from '@material-ui/core'

const PopupManu = ({anchor, close, onClick, menus}) => {

    const onClose = (value) => {

        if (onClick) onClick(value)
        if (close) close()
    }

    return (
        <Menu
            id="add-menu"
            anchorEl={anchor}
            keepMounted
            open={Boolean(anchor)}
            TransitionComponent={Fade}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            style={{marginTop:"30px"}}
        >
            { menus && menus.map((menu, index) => <MenuItem key={index} onClick={() => onClose(menu.name)}>{menu.name}</MenuItem>) }
        </Menu>
    )
}

export default PopupManu
