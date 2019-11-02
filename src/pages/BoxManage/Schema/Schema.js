import React, { useState } from 'react'

import generator from '../../../util/api/models/generator'
import AttributeType  from '../../../util/api/models/generator/enums/attributeTypes'

const { Schema, Attribute } = generator

const temp = new Schema("test001")

function SchemaForm({schema}) {

  const [attrName, setAttrName] = useState("")
  const [attrType, setAttrType] = useState(AttributeType.String)

  const addAttribute = (payload) => {
    let tempAttr = new Attribute(payload.name)
    tempAttr.actions.setType(tempAttr, payload.type)
    schema.addAttribute(tempAttr)
    setAttrName("")
    setAttrType(AttributeType.String)
  }

  return (
    <div>
      <div onClick={()=>addAttribute({attrName, attrType})}>
        <button>+</button><span>add attribute</span>
      </div>
      <div>
        <input type="text" value={attrName} onChange={({target: {value}})=>setAttrName(value)} />
        <button onClick={()=>setAttrType(AttributeType.String)} disabled={attrType === AttributeType.String}>String</button>
        <button onClick={()=>setAttrType(AttributeType.Number)} disabled={attrType === AttributeType.Number}>Number</button>
        <button onClick={()=>setAttrType(AttributeType.Bool)} disabled={attrType === AttributeType.Bool}>Boolean</button>
      </div>
      {
        temp.attributes && temp.attributes.map((value, key)=><li key={key}>{value.name}</li>)
      }
    </div>
  )
}

export default SchemaForm
