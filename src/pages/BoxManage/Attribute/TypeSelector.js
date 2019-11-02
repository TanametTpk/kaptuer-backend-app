import React from 'react'
import SelectionField from '../../../components/SelectionField'

const dataTypes = [
    "string",
    "number",
    "date",
    "id"
]

const TypeSelector = ({selectedType , onSelect}) => {

    const isSelectedType = (type) => {
        return type === selectedType
    }

    return(
        <div className="type-selector-container" style={{display:"grid" , gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>

            {
                dataTypes.map((type , index) => <SelectionField onClick={() => {onSelect(type)}} key={index} title={type} active={isSelectedType(type)} /> )
            }

        </div>
    )

}

export default TypeSelector
