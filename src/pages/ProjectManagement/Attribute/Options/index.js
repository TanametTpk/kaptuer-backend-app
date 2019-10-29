import React from 'react'

import DateOption from './DateOption'
import DefaultOption from './DefaultOption'
import IdOption from './IdOption'
import NumberOption from './NumberOption'
import StringOption from './StringOption'

const Options = ({selectedType , setOptions , options}) => {

    const getOptionByType = (type) => {

        let props = { setOptions , options }

        if (type === "string")  return <StringOption {...props} />
        if (type === "number")  return <NumberOption {...props} />
        if (type === "date")    return <DateOption {...props} />
        if (type === "id")      return <IdOption {...props} />

    }

    return (
        <div className="project-options-container">

            <DefaultOption setOptions={setOptions} options={options} />
            { getOptionByType(selectedType) }

        </div>
    )

}

export default Options