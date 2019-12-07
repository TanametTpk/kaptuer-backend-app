import React, { useState } from 'react'
import generator from '../../../util/api/models/generator'

const { Schema } = generator

const useList = (init) => {
  const [list, setList] = useState(init)

  const add = (data) => {
    setList([...list, data])
  }
  return [list, add]
}

function Schemas() {

  const [schemaName, setSchemaName] = useState("")
  const [schemaList, addSchemaList] = useList([])

  const createSchema = ({ projectName }) => {
    let schema = new Schema(schemaName)
    addSchemaList(schema)
  }

  return (
    <div>
      <div>
        <div onClick={createSchema}>
          <button>+</button><span>create new schema</span>
        </div>
        <input name="schema" value={schemaName} onChange={({ target: { value } }) => setSchemaName(value)} />
      </div>
      {
        schemaList.map((value, key) => <li key={key}>{value.name}</li>)
      }
    </div>
  )
}

export default Schemas
