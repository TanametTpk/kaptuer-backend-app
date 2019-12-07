import React, {useState} from 'react'
import {Button, Input} from 'antd'
import {useModal} from '../../../util/hooks'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .back-btn {
        margin-top: 10px;
        cursor: pointer;
    }

`

const Form = ({onNext, onBack}) => {

    let [ name , setName ] = useState("")
    const [open, handleClickOpen, handleClose] = useModal(false);

    const noWhiteSpaceName = ({target:{value}}, l) => {


        value = value.replace(/[^a-zA-Z0-9]/g, "_")
        setName(value)

    }

    const onClick = () => {

        let result = name.match(/_*[a-zA-Z0-9]+[a-zA-Z0-9_]*_*/g)
        
        if (!result){
            handleClickOpen()
            return
        }

        if (onNext) onNext({name})

    }

    return (
        <Container>
            <Input
                value={name}
                onChange={noWhiteSpaceName}
                style={{width:"40vw", maxWidth:"70vh" , margin:"0 0 5vh" , height:"5vw" , fontSize:"24px", padding: "0 30px 0 30px"}}
                placeholder="Application name"
            />
            <Button style={{
                width:"25vh" ,
                background:"linear-gradient(77.52deg, #ED765E 1.63%, #FEA858 96.86%)" ,
                border:"none" ,
                boxShadow:"0px 2px 4px rgba(252, 110, 81, 0.14), 0px 4px 5px rgba(252, 110, 81, 0.12), 0px 1px 10px rgba(252, 110, 81, 0.2)"}}
                type="primary"
                shape="round"
                size="large"
                onClick={onClick}
            >
                CREATE APP
            </Button>
            <span className="back-btn" onClick={onBack} >back</span>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Your can't use this app name!"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Your app name should have at least one alphabet.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    OK
                </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default Form
