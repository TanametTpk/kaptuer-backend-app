import React, {useState} from 'react'
import SchemaTable from './components/SchemaTable'
import AttributeSection from '../components/AttributeSection'
import { Modal, Button } from 'antd'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
import {useModal} from '../../../util/hooks'

const MiniHeader = styled.div`

    display: flex;
    justify-content: flex-end;
    width: 100%;

`

const ApiSystem = ({...props}) => {

    const [ selectedSchema, setSchema ] = useState(null)
    let [ schemaModal, openSm, closeSm ] = useModal()
    let [ attModal, openAm, closeAm ] = useModal()
    let [ attributeName, setAttName ] = useState("")
    const [validatedAtt, setValidatedAtt] = useState(false);

    const selectSchema = (row) => {

        setSchema(row)

    }

    const closeSchema = () => {

        setSchema(null)

    }

    const noWhiteSpaceName = ({target:{value}}, l) => {


        value = value.replace(/[^a-zA-Z0-9]/g, "_")
        setAttName(value)

    }

    const canUseName = (name) => {
        return Boolean(name.match(/_*[a-zA-Z0-9]+[a-zA-Z0-9_]*_*/g))
    }

    const onCreateAtt = () => {

        setValidatedAtt(true)
        let result = canUseName(attributeName)
        
        if (!result){
            // handleClickOpen()
            return
        }

    }

    return (
        <div>
            {

                selectedSchema ?
                <div>
                    <MiniHeader style={{marginBottom:"24px"}}>
                        <Button 
                            style={{color:"#334D6E"}}
                            type="link"
                            size="large"
                            onClick={closeSchema}
                        >
                            back
                        </Button>
                        <Button 
                            style={{
                                background:"#109CF1" ,
                                border:"none" ,
                                boxShadow:"0px 4px 10px rgba(16, 156, 241, 0.24)"
                            }}
                            type="primary"
                            size="large"
                            onClick={openAm}
                        >
                            Add attributes
                        </Button>
                    </MiniHeader>
                    <AttributeSection 
                        onClick={()=>{}}
                        attributes={[{_id:"test", name:"fuck", option:"unique"}]}
                    />
                </div>
                :
                <div>
                    <MiniHeader>
                        <Button style={{
                                background:"#109CF1" ,
                                border:"none" ,
                                boxShadow:"0px 4px 10px rgba(16, 156, 241, 0.24)"
                            }}
                            type="primary"
                            size="large"
                            onClick={openSm}
                        >
                            Add Schema
                        </Button>
                    </MiniHeader>
                    <SchemaTable onClick={selectSchema} />
                </div>
            }

            <Modal
                title="Add attribute"
                visible={attModal}
                onOk={onCreateAtt}
                onCancel={closeAm}
            >
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Attribute name</Form.Label>
                        <Form.Control 
                            required
                            onChange={noWhiteSpaceName}
                            value={attributeName}
                            type="text"
                            placeholder="my attribute"
                            isInvalid={validatedAtt && !canUseName(attributeName)}
                        />
                        <Form.Control.Feedback type="invalid">
                            You can't use this name
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="What this attribute use for ?" as="textarea" rows="3" />
                    </Form.Group>
                </Form>
            </Modal>

            <Modal
                title="Add schema"
                visible={schemaModal}
                onOk={()=>{}}
                onCancel={closeSm}
            >
                test
            </Modal>

        </div>
    )
}

export default ApiSystem
