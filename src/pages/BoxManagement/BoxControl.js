import React, {useState} from 'react'
import TopicHeader from './TopicHeader'
import Boxlist from './Boxlist'

const BoxControl = ({title, data, onMore}) => {

    let [ isClose, setClose ] = useState(false)

    return (
        <div>
            <TopicHeader title={title} isClose={isClose} onClick={()=>setClose(!isClose)} />
            { !isClose && <Boxlist onMore={onMore} boxes={data} /> }
        </div>
    )
}

export default BoxControl
