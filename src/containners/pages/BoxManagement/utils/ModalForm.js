import React, { useState } from 'react'
import {useModal} from '../../../util/hooks'
import Modal from '../../../components/Modal'
import TextField from '../../../components/TextField'
import TitleField from '../../../components/TitleField'
import RoundCornerButton from '../../../components/RoundCornerButton'

const ModalForm = (props) => {

    let [show , openModal , closeModal] = useModal()
    let [name , setName] = useState("")

    const create = () => {
        setName("")
        props.onCreate(name)
        closeModal()
    }

    return(
        <div className="project-modal-container">
            {/* display input */}
            <div className="project-modal-input-container" onClick={openModal}>
                {props.children}
            </div>

            <Modal show={show} onClose={closeModal} >
                <div style={{minWidth:"300px"}}>
                    <h2>{props.title}</h2>
                    <TitleField title="Name">
                        <TextField placeholder={props.placeholder} value={name} onChange={({target:{value}})=>setName(value)} />
                    </TitleField>
                    <RoundCornerButton onClick={create} style={{backgroundColor:"#3FBF9A", height:"auto" , width:"auto" , padding:"12px 24px" , marginTop:"24px"}}>
                        create
                    </RoundCornerButton>
                </div>
            </Modal>

        </div>
    )

}

export default ModalForm
