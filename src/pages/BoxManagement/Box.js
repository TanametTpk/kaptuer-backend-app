import React, {useState} from 'react'
import {Card} from '../../components/Card'
import {MdMoreVert} from 'react-icons/md'
import Menu from '../../containners/MainLayout/Menu'
import {useAnchorElement} from '../../util/hooks'

const Box = ({box:{img, name, description, _id}, imgColor}) => {

    const [ isMoreHover, setMoreHover ] = useState(false)
    const [ anchor, open, close ] = useAnchorElement()

    return (
        <Card style={{padding:"14px 18px",flexDirection:"row", position:"relative" , cursor:"pointer", minWidth:"380px"}}>
            <div style={{height:"100px", width:"100px", padding:"8px", marginRight:"12px" , backgroundColor:imgColor , borderRadius:"6px"}}>
                <img src={img} alt="box" style={{height:"100%", width:"100%", objectFit:"cover"}} />
            </div>
            <div style={{display:"flex" , flexDirection:"column", padding:"2px"}}>
                <h4>{name}</h4>
                <span style={{color:"rgba(0,0,0,0.6)", textOverflow: "ellipsis", maxWidth:"100%" }}>{description}</span>
                <MdMoreVert
                    size="20px"
                    fill={isMoreHover ? "black" : "gray"}
                    style={{position:"absolute", top:"12px" , right:"12px", cursor:"pointer"}}
                    onMouseOut={()=>setMoreHover(false)}
                    onMouseOver={()=>setMoreHover(true)}
                    onClick={open}
                />
            </div>
            <Menu
                anchor={anchor}
                close={close}
                onClick={(e)=>console.log(e, _id)}
                menus={[{name:"Generate"}, {divider:true} ,{name:"Delete"}]}
                vertical="top"
                horizontal="left"
            />
        </Card>
    )
}

export default Box
