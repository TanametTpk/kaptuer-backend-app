import React from 'react'
import ModalForm from '../utils/ModalForm'

const SchemaModal = (props) => {

    return(
        <ModalForm placeholder="Schema name" title="Create Schema" onCreate={props.onCreate} >
            {props.children}
        </ModalForm>
    )

}

export default SchemaModal
