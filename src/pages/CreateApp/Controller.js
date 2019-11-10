import React, {useState} from 'react'
import CreateApp from './CreateApp'
import SetAppName from './SetAppName'
import Loader from '../../components/Loader'
import {useHistory} from 'react-router-dom'
import { createApplication } from '../../store/actions/application'
import { connect } from 'react-redux'

const Controller = (props) => {

    let history = useHistory()
    let [ app, setApp ] = useState({})
    let [ step, setStep ] = useState(1)

    const onBack = () => {
        setStep(step - 1)
    }

    const onNext = (value) => {
        
        setApp({
            ...app,
            ...value
        })

        setStep(step + 1)
    }

    const getCompFromStep = () => {
        
        if (step === 1) return <CreateApp onNext={onNext} />
        if (step === 2) return <SetAppName onNext={onNext} onBack={onBack} />
        else {
            
            // create app
            props.createApplication(app).then(() => {
                history.push("/")
            })

            return <Loader />
        }

    }

    return getCompFromStep()
}

const mapDispatchToProps = {
    createApplication
}

export default connect(null, mapDispatchToProps)(Controller)
