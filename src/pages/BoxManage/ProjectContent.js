import React from 'react'
import Content from '../../components/Content'
import ProjectList from '../../components/ProjectList'
import ProjectForm from './Project'

import {Card} from '../../components/Card'
import IconButton from '../../components/IconButton'
import { MdAdd } from "react-icons/md";

const ProjectContent = ({selectedProject , onSelectProject , projects , createProject , onGenerate , onDelete}) => {

  return (
    <Content>
        <Card style={{padding:"18px 0 18px 18px" , margin:"24px 24px" , overflow:"visible" , color:"white" , boxShadow: "4px 4px 20px 0px rgba(0,0,0,0.1)" }}>
        <ProjectList 
            title="Project Name" 
            actions={<ProjectForm onCreate={createProject} ><IconButton action={()=>{}} icon={<MdAdd size={32} />} /></ProjectForm>}
            items={projects}
            onMore={() => {}}
            onSelect={(index , project) => onSelectProject(project)}
            selectedItem={selectedProject}
            menu="project"
            onGenerate={onGenerate}
            onDelete={onDelete}
        />
        </Card>
    </Content>
  )
}

export default ProjectContent