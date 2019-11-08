import React, {useState} from 'react'
import PlatformList from './components/PlatformList'
import PlatformDetail from './components/PlatformDetail'
import { FaHtml5, FaReact, FaInfoCircle } from 'react-icons/fa'
import { Card } from 'antd';

let platforms = [
    // {
    //     name:"React",
    //     type:"frontend",
    //     icon:FaReact
    // },
    // {
    //     name:"HTML",
    //     type:"frontend",
    //     icon:FaHtml5
    // },
    {
        name:"APIs",
        type:"documents",
        icon:FaInfoCircle
    },
]

const LoginSystem = () => {

    let [ platform, setPlatform ] = useState(platforms[0])

    return (
        <div>
            <h2>Usage</h2>
            <PlatformList platforms={platforms} selected={platform} onClick={(platform) => setPlatform(platform)} />
            <Card style={{marginTop:"20px"}}>
                <PlatformDetail platform={platform} />
            </Card>
        </div>
    )
}

export default LoginSystem