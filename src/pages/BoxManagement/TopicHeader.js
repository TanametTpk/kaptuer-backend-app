import React from 'react'
import SeperateHeader from '../../components/SeperateHeader'
import { TiArrowSortedDown } from "react-icons/ti";

const TopicHeader = ({title, isClose, onClick}) => {
    return (
        <SeperateHeader>
            <div style={{display:"flex", lineHeight:"1" , fontWeight:"bold", width:"100%" , justifyContent:"space-between"}}>
                {title}
                <div style={{transform:isClose ? "rotate(-90deg)" : ""}} ><TiArrowSortedDown size="25px" onClick={onClick} /></div>
            </div>
        </SeperateHeader>
    )
}

export default TopicHeader
