import React, {useState} from 'react'
import {Card} from '../../components/Card'
import {MdMoreVert} from 'react-icons/md'
import Menu from '../../containners/MainLayout/Menu'
import {useAnchorElement} from '../../util/hooks'
import LoginSystemIcon from '../../asset/svg/password.svg'
import { connect } from 'react-redux'
import { deleteBox } from '../../store/actions/box'
import { generate } from '../../store/actions/generator'
import { useHistory } from 'react-router-dom'

const Box = ({box:{img, name, description, _id}, imgColor, ...props}) => {

    const history = useHistory();
    const [ isMoreHover, setMoreHover ] = useState(false)
    const [ anchor, open, close ] = useAnchorElement()

    const goToBox = () => {
        history.push(`/boxes/${_id}`)
    }

    const generate = () => {
        props.generate({projectID: _id})
    }

    const onDelete = () => {
        props.deleteBox(_id)
    }

    const popupHandler = (action) => {

        if (action === "Generate") generate()
        if (action === "Delete") onDelete()

    }

    return (
        <div style={{position:"relative"}}>
            <Card onClick={goToBox} style={{padding:"14px 18px",flexDirection:"row" , cursor:"pointer", minWidth:"380px"}}>
                <div style={{height:"100px", width:"100px", padding:"8px", marginRight:"12px" , backgroundColor:imgColor , borderRadius:"6px"}}>
                    <img src={img || LoginSystemIcon} alt="box" style={{height:"100%", width:"100%", objectFit:"cover"}} />
                </div>
                <div style={{display:"flex" , flexDirection:"column", padding:"2px"}}>
                    <h4>{name}</h4>
                    <span style={{color:"rgba(0,0,0,0.6)", textOverflow: "ellipsis", maxWidth:"100%" }}>{description}</span>
                </div>
            </Card>
            <MdMoreVert
                size="20px"
                fill={isMoreHover ? "black" : "gray"}
                style={{position:"absolute", top:"12px" , right:"12px", cursor:"pointer"}}
                onMouseOut={()=>setMoreHover(false)}
                onMouseOver={()=>setMoreHover(true)}
                onClick={open}
            />
            <Menu
                anchor={anchor}
                close={close}
                onClick={popupHandler}
                menus={[{name:"Generate"}, {divider:true} ,{name:"Delete"}]}
                vertical="top"
                horizontal="left"
            />
        </div>
    )
}


const mapDispatchToProps = {
    deleteBox, generate
}


export default connect(null, mapDispatchToProps)(Box)
