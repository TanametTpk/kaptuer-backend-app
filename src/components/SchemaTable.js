import React from 'react'
import IconButton from './IconButton'
import { MdAdd, MdDelete } from "react-icons/md";

const SchemaItemHeader = (props) => {

    return (
        <tr>
            {props.cols.map((col, index) => <th key={index}>{col}</th>)}
        </tr>
    )

}

const SchemaHeader = ({ onClickAdd }) => {

    return (
        <thead>
            <SchemaItemHeader cols={[<div>Attribute Name</div>, <div>Attribute Type</div>, <IconButton action={onClickAdd} icon={<MdAdd size={32} />} />]} />
        </thead>
    )

}

const SchemaBody = ({ items, onDelete }) => {

    return (
        <tbody>

            {items && items.map((item, index) => {

                let col = [...item]
                col.push([
                    <IconButton action={() => { onDelete(index, item) }} key={index} icon={<MdDelete size={24} fill="black" />} />
                ])

                return <SchemaItem key={index} cols={col} />

            })}

        </tbody>
    )

}

const SchemaItem = ({ cols }) => {

    return (
        <tr>
            {cols && cols.map((col, index) => <td key={index}>{col}</td>)}
        </tr>
    )

}

const SchemaTable = ({ items, onClickAdd, onDelete }) => {

    return (
        <table className="schema-table">
            <SchemaHeader onClickAdd={onClickAdd} />
            <SchemaBody items={items} onDelete={onDelete} />
        </table>
    )

}


export default SchemaTable