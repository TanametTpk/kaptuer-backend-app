import React from 'react'
import {useModal} from '../../util/hooks'

import SchemaTable from '../../components/SchemaTable'

import {Card} from '../../components/Card'
import IconButton from '../../components/IconButton'
import { MdChevronLeft , MdInsertDriveFile } from "react-icons/md";
import AttributeModal from './Attribute'


const AttributeContent = ({attributes , setSelectSchema , selectedSchema , onDelete, onCreate}) => {

    let [show , open , close] = useModal()

    const parseObjectToArray = (object) => {
        let { name , type } = object
        let att = Object.values({name , type}) 
        return att
    }

    const attributesToTable = (attributes) => {
        return attributes.map(att => parseObjectToArray(att))
    }

    return (
        <Card style={{padding:"18px 0 18px 18px" , margin:"24px 24px" , overflow:"visible" , color:"white" , boxShadow: "4px 4px 20px 0px rgba(0,0,0,0.1)" }}>
            <div className="nav-schama-card" style={{display:"flex" , color:"black" , alignItems:"center"}}>
                <IconButton icon={<MdChevronLeft size={24} fill="black" />} action={() => setSelectSchema(null)} />
                <span style={{fontSize:"24px" , paddingLeft:"16px" , display:"flex" , alignItems:"center"}}><MdInsertDriveFile size={24} fill="#3FBF9A" style={{paddingRight:"5px"}} /> {selectedSchema.name}</span>
            </div>
            <SchemaTable onClickAdd={open} items={attributesToTable(attributes)} onDelete={onDelete} />
            <AttributeModal show={show} openModal={open} closeModal={close} onCreate={onCreate} />
        </Card>
    )
}

export default AttributeContent