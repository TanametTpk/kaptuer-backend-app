import React from 'react'
import ProjectList from '../../components/ProjectList'

import {Card} from '../../components/Card'
import IconButton from '../../components/IconButton'
import { MdAdd } from "react-icons/md";
import SchemaModal from './Schema/SchemaModal'

const SchemaContent = ({schemas , setSelectSchema , onDelete, onCreate}) => {

  return (
    <Card style={{padding:"18px 0 18px 18px" , margin:"24px 24px" , overflow:"visible" , color:"white" , boxShadow: "4px 4px 20px 0px rgba(0,0,0,0.1)" }}>
        <ProjectList
            title="Schema Name"
            actions={<SchemaModal onCreate={onCreate}> <IconButton action={()=>{}} icon={<MdAdd size={32} />} /> </SchemaModal>}
            items={schemas}
            onMore={(index , schema) => {}}
            onSelect={(index , schema) => setSelectSchema(schema)}
            menu="schema"
            onDelete={onDelete}
        />
    </Card>
  )
}

export default SchemaContent