import React from 'react'
import SelectionField from '../../../../components/SelectionField'

let defaultOptions = [
    "trim",
    "lowercase",
    "id",
    "encrypt",
    "auth"
]

const StringOption = ({ setOptions , options}) => {

    const setKeyValue = (key , value) => {

        setOptions({
            ...options,
            [key]:value
        })
    }

    const optionToDisplay = (option) => {

        if (option === "id") return "use as ID"
        if (option === "encrypt") return "use as password"
        if (option === "auth") return "store in JWT"

        return option

    }

    return(
        <div style={{padding:"24px"}}>
            
            {defaultOptions.map((key , index) => <SelectionField onClick={() => {setKeyValue(key , !options[key])}} key={index} title={optionToDisplay(key)} active={options[key]} />) }

        </div>
    )

}

export default StringOption