import React from 'react'

const SeperateHeader = ({children , style}) => (
    <div className={"seperate-header "} style={style}>
        {children}
    </div>
)

export default SeperateHeader