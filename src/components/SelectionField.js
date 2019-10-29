import React from 'react'

const SelectionField = ({title , active , onClick}) => (
    <div className={"selection-field-container " + (active ? "active" : "")} onClick={onClick} >
        <div>{title}</div>
    </div>
)

export default SelectionField