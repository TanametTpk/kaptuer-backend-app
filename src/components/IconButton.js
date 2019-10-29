import React from 'react'

const IconButton = ({icon , action , style , color , size}) => (
    <div className={"icon-button "} style={style} onClick={action} >
        {icon}
    </div>
)

export default IconButton