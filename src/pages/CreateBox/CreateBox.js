import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import BoxList from './BoxList'
import {Fab} from '@material-ui/core'
import { MdDone } from 'react-icons/md'
import { getBoxTemplate, createBoxes } from '../../store/actions/box'
import Loader from '../../components/Loader'
import { connect } from 'react-redux'
import {useHistory} from 'react-router-dom'

const Container = styled.div`

    text-align: center;

    .back-btn {
        cursor: pointer;
        font-size: 18px;
    }

    .spacer{
        margin:28px 0 0 0;
    }

    .fab{
        position: fixed;
        bottom: 40px;
        right: 40px;
        outline: none;
        background: linear-gradient(87.74deg, #ED765E 1.63%, #FEA858 96.86%);
        box-shadow: 0px 2px 4px rgba(252, 110, 81, 0.14), 0px 4px 5px rgba(252, 110, 81, 0.12), 0px 1px 10px rgba(252, 110, 81, 0.2);
        color: white;
        font-weight: bold;
        transition: all .2s ease-in-out;
        border-radius: 20em;

    }

`

const CreateBox = (props) => {

    let [fabHover , setHover] = useState(false)
    let [ selectedMap, setMap ] = useState({})
    let history = useHistory()

    useEffect(()=> {

        if (Object.entries(props.app).length < 1) history.push("/")
        // props.getBoxTemplate()

    },[])

    const toggleSelect = (box) => {
        
        let sm = {...selectedMap}
        if (sm[box._id]){
            delete sm[box._id]
        }else{
            sm[box._id] = box
        }

        setMap(sm)

    }

    const createBoxes = () => {

        if (Object.keys(selectedMap).length < 1){
            // not have any box

            return
        }

        // send to server to create boxes
        props.createBoxes(Object.values(selectedMap), props.app._id).then(() => {
            history.goBack()
        })

        return <Loader />

    }

    return (
        <Container>
            <h1 style={{fontWeight:"bold" , fontSize:"60px", textAlign:"center", margin:"5% 0 0 0", letterSpacing:"0.01em"}}>
                What box do you want ?
            </h1>
            <span className="back-btn" >Box is template system that you can add it fast and easy</span>
            <div className="spacer" />
            <BoxList selectedMap={selectedMap} onSelect={toggleSelect} boxes={props.boxes} />
            <Fab
                variant={fabHover ? "extended" : undefined}
                size={fabHover ? "large" : "medium"} 
                onMouseOver={()=>setHover(true)} 
                onMouseOut={()=>setHover(false)} 
                onClick={createBoxes}
                className="fab" 
                aria-label="add"
            >
                <MdDone size="30px" fill="white" />
                {fabHover && "Create boxes"}
            </Fab>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    boxes: state.box.templates,
    app: state.app.selected
})

const mapDispatchToProps = {
    getBoxTemplate,
    createBoxes
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateBox)
