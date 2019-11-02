import React from 'react'
import { Badge } from 'antd';
import { MdNotificationsNone } from 'react-icons/md'

const Notification = () => {
    return (
        <div style={{marginRight: "20px", cursor:"pointer"}}>
            <Badge dot >
                <MdNotificationsNone size="25px" fill="#C2CFE0" />
            </Badge>
        </div>
    )
}

export default Notification
