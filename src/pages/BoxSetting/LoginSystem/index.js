import React, {useState} from 'react'
import PlatformList from './components/PlatformList'
import { FaHtml5, FaReact, FaInfoCircle } from 'react-icons/fa'

let platforms = [
    {
        name:"React",
        type:"frontend",
        icon:FaReact
    },
    {
        name:"HTML",
        type:"frontend",
        icon:FaHtml5
    },
    {
        name:"APIs",
        type:"documents",
        icon:FaInfoCircle
    },
]

const LoginSystem = () => {

    let [ platform, setPlatform ] = useState("React")

    return (
        <div>
            <h2>Usage</h2>
            <PlatformList platforms={platforms} selected={platform} onClick={(platform) => setPlatform(platform.name)} />
        </div>
    )
}

export default LoginSystem