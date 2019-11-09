import React, {useState} from 'react'
import SchemaTable from './components/SchemaTable'
import AttributeSection from '../components/AttributeSection'
import { Modal, Button } from 'antd'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
import {useModal} from '../../../util/hooks'
import CreateAttForm from './components/CreateAttForm'
import CreateSchemaForm from './components/CreateSchemaForm'

const MiniHeader = styled.div`

    display: flex;
    justify-content: flex-end;
    width: 100%;

`

const ApiSystem = ({...props}) => {

    const [ selectedSchema, setSchema ] = useState(null)
    let [ schemaModal, openSm, closeSm ] = useModal()
    let [ attModal, openAm, closeAm ] = useModal()
    const [validatedAtt, setValidatedAtt] = useState(false);
    const [validatedSm, setValidatedSm] = useState(false);
    let [ att, setAtt ] = useState({})
    let [sche, setSche] = useState({})

    const selectSchema = (row) => {

        setSchema(row)

    }

    const closeSchema = () => {

        setSchema(null)

    }

    const noWhiteSpaceName = (value, setMethod) => {

        value = {
            ...value,
            name: (value.name || "").replace(/[^a-zA-Z0-9]/g, "_")
        }
        setMethod(value)

    }

    const canUseName = (name) => {
        return Boolean(name.match(/_*[a-zA-Z0-9]+[a-zA-Z0-9_]*_*/g))
    }

    const onCreateAtt = () => {

        setValidatedAtt(true)
        let result = canUseName(att.name)
        
        if (!result){
            // handleClickOpen()
            return
        }

        setAtt({})
        setValidatedAtt(false)
        closeAm()

    }

    const onCreateSchema = () => {

        setValidatedSm(true)
        let result = canUseName(sche.name)
        
        if (!result){
            // handleClickOpen()
            return
        }

        setSche({})
        setValidatedSm(false)
        closeSm()

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
                <CreateAttForm onChange={(value)=>noWhiteSpaceName(value, setAtt)} attribute={att} canUseName={canUseName} validated={validatedAtt} />
            </Modal>

            <Modal
                title="Add schema"
                visible={schemaModal}
                onOk={onCreateSchema}
                onCancel={closeSm}
            >
                <CreateSchemaForm onChange={(value)=>noWhiteSpaceName(value, setSche)} schema={sche} canUseName={canUseName} validated={validatedSm} />
            </Modal>

        </div>
    )
}

export default ApiSystem
