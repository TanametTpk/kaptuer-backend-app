import React, { useState } from 'react'
import Modal from '../../../components/Modal'
import TextField from '../../../components/TextField'
import TitleField from '../../../components/TitleField'
import RoundCornerButton from '../../../components/RoundCornerButton'
import TypeSelector from './TypeSelector'
import Options from './Options'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const AttributeModal = ({show , openModal , closeModal , onCreate}) => {

    let [name , setName] = useState("")
    let [ type, setType ] = useState("string")
    let [ options, setOptions ] = useState({})
    const [popoverOpen, setPopoverOpen] = useState(false);

    const create = () => {

        if(!name){
            setPopoverOpen(true)
            return
        }

        onCreate({name , type , ...options})

        // clean
        setName("")
        setType("string")
        setOptions({})
        
        
        closeModal()
    }

    const setTypeMiddleWare = (type) => {

        setType(type)
        setOptions({}) // clean options

    }

    return(
        <div className="project-modal-container">

            <Modal show={show} onClose={closeModal} >
                <div style={{minWidth:"300px"}}>
                    <h2>Add Attribute</h2>
                    <TitleField title="Name">
                        <TextField placeholder="Attribute name" id="att-name" value={name} onFocus={()=>setPopoverOpen(false)} onChange={({target:{value}})=>setName(value)} />
                    </TitleField>
                    <TitleField title="Type">
                        <TypeSelector selectedType={type} onSelect={setTypeMiddleWare} />
                    </TitleField>
                    <TitleField title="Option">
                        <Options selectedType={type} setOptions={setOptions} options={options} />
                    </TitleField>
                    <RoundCornerButton onClick={create} style={{backgroundColor:"#3FBF9A", height:"auto" , width:"auto" , padding:"12px 24px" , marginTop:"24px"}}>
                        Add
                    </RoundCornerButton>
                </div>
            </Modal>

            <Popover placement="bottom" isOpen={popoverOpen} target="att-name">
                <PopoverHeader>Invalid Input</PopoverHeader>
                <PopoverBody>Please enter attribute name.</PopoverBody>
            </Popover>

        </div>
    )

}

export default AttributeModal
