import React from 'react'
import ModalForm from '../utils/ModalForm'

const ProjectModal = (props) => {

    return(
        <ModalForm placeholder="Project name" title="Create project" onCreate={props.onCreate} >
            {props.children}
        </ModalForm>
    )

}

export default ProjectModal
