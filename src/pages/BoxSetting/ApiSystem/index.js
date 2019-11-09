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

    const selectSchema = (row) => {

        setSchema(row)

    }

    const closeSchema = () => {

        setSchema(null)

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
                onOk={()=>{}}
                onCancel={closeAm}
            >
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Attribute name</Form.Label>
                        <Form.Control type="text" placeholder="my attribute" />
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
