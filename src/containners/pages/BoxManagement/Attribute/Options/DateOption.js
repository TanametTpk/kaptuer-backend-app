import React from 'react'
import SelectionField from '../../../../components/SelectionField'

const DateOption = ({ setOptions , options}) => {

    const setKeyValue = (key , value) => {

        setOptions({
            ...options,
            [key]:value
        })
    }

    return(
        <div style={{padding:"24px"}}>
            
            <SelectionField onClick={() => {setKeyValue("default" , options["default"] ? "" : "Date.now")}} title="use as created_at" active={options["default"]} />

        </div>
    )

}

export default DateOption