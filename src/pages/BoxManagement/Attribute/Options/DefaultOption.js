import React from 'react'
import SelectionField from '../../../../components/SelectionField'

let defaultOptions = [
    "require",
    "unique",
    "array",
    "disableGet",
    "disableUpdate"
]

const DefatultOption = ({ setOptions , options}) => {

    const setKeyValue = (key , value) => {
        setOptions({
            ...options,
            [key]:value
        })
    }

    return(
        <div style={{padding:"24px"}}>
            
            {defaultOptions.map((key , index) => <SelectionField onClick={() => {setKeyValue(key , !options[key])}} key={index} title={key} active={options[key]} />) }

        </div>
    )

}

export default DefatultOption