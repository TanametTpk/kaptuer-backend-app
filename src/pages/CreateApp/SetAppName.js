import React from 'react'
import Form from './components/Form'

const SetAppName = ({onNext , onBack}) => {
    
    return (
        <div>
            <h1 style={{fontWeight:"bold" , fontSize:"60px", textAlign:"center", margin:"5% 0"}}>
                What is your <br/>
                application name?
            </h1>
            <Form onNext={onNext} onBack={onBack} />
        </div>
    )
}

export default SetAppName
