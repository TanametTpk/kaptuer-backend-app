import React from 'react'
import Form from './components/Form'

const SetAppName = ({onClick}) => {
    
    return (
        <div>
            <h1 style={{fontWeight:"bold" , fontSize:"60px", textAlign:"center", margin:"5% 0"}}>
                What is your <br/>
                application name?
            </h1>
            <Form />
        </div>
    )
}

export default SetAppName
