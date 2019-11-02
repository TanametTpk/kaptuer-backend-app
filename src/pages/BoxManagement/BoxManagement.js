import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import API from '../../util/api'
// import SeperateHeader from '../../components/SeperateHeader'
// import Layout from '../../components/Layout'
// import Content from '../../components/Content'
// import ProjectContent from './ProjectContent'
// import SchemaContent from './SchemaContent'
// import AttributeContent from './AttributeContent'

import { connect } from 'react-redux'
import { getBox, deleteBox, createBox } from '../../store/actions/project'
import { getSchema, deleteSchema, createSchema } from '../../store/actions/schema'
import { getAttribute, deleteAttribute, createAttribute } from '../../store/actions/attribute'
import { addSchema, generate, createGenerator } from '../../store/actions/generator'

// import IconButton from '../../components/IconButton'
// import { MdChevronLeft } from "react-icons/md";
import BoxControl from './BoxControl'
import Pass from '../../asset/svg/password.svg'

import { logEvent } from '../../util/analytics/ga'

function BoxManagement(props) {
  const history = useHistory();
  const appId = "test" // props.history.location.state.application.id
  const [selectProject, setSelectProject] = useState(null)
  const [selectSchema, setSelectSchema] = useState(null)
  const [isProjectNameError, setProjectNameError] = useState(false)

  useEffect(() => {

    // const fetchProject = async () => await props.getBox(appId) // TODO - change application id here

    // fetchProject()

  }, [])

  const createBox = async (name) => {

    if (props.project.items.some((proj) => proj.name === name)){
      setProjectNameError(true)
      // error
      return 
    }

    await props.createBox({ name, application: appId })

  }

  const setProject = (project) => {
    setSelectProject(project)
    setSelectSchema(null)
  }

  const getSchema = async (projectID) => {

    // search schema for project id
    await props.getSchema(projectID)

  }

  const onSelectSchema = (schema) => {

    setSelectSchema(schema)
    getAttribute(schema._id)

  }

  const getAttribute = async (schemaID) => {

    await props.getAttribute(schemaID)

  }

  const onSelectProject = async (project) => {

    setProject(project)
    getSchema(project._id)

  }

  const generateProject = async (index, project) => {

    logEvent("projectPage", "generate project")
    let res = await API.generator.generate(project)
    window.open(res.data.url)

  }

  const deleteBox = async (index, item) => {
    await props.deleteBox(item._id)
  }

  const deleteSchema = async (index, item) => {
    await props.deleteSchema(item._id)
  }

  const deleteAttribute = async (index, item) => {
    let _item = props.attribute.items[index]
    await props.deleteAttribute(_item._id)
  }
  let data = [
    {name:"Login system" , description:"standard login system." , img:Pass},
    {name:"Login system" , description:"standard login system." , img:Pass},
    {name:"Login system" , description:"standard login system." , img:Pass},
  ]

  return (
    <div style={{margin:"20px 20% 0" }}>

      <BoxControl title="Channels" data={data} />

      <BoxControl title="Boxes" data={data} />

    </div>
  )
}

const mapStateToProps = (state) => ({
  project: state.project,
  schema: state.schema,
  attribute: state.attribute,
  generator: state.generator
})

const mapDispatchToProps = {
  getBox,
  createBox, 
  deleteBox,
  getSchema, 
  createSchema, 
  deleteSchema, 
  getAttribute, 
  createAttribute, 
  deleteAttribute, 
  addSchema, 
  generate, 
  createGenerator
}


export default connect(mapStateToProps, mapDispatchToProps)(BoxManagement)

// {

//   selectProject &&

//   // when project has been selected
//   (
//     selectSchema ?
//       // -------------------- YES --------------------
//       <AttributeContent setSelectSchema={setSelectSchema} attributes={props.attribute.items} selectedSchema={selectSchema} onDelete={deleteAttribute} onCreate={(attribute) => props.createAttribute({ ...attribute, databaseMeta: selectSchema._id })} />
//       :
//       // -------------------- NO --------------------
//       <SchemaContent onCreate={(name) => props.createSchema({ name, project: selectProject._id })} schemas={props.schema.items} setSelectSchema={onSelectSchema} onDelete={deleteSchema} />
//   )

// }