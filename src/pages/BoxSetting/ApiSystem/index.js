import React, {useState, useEffect} from 'react'
import SchemaTable from './components/SchemaTable'
import AttributeSection from '../components/AttributeSection'
import { Modal, Button, Empty, Card } from 'antd'
import styled from 'styled-components'
import {useModal} from '../../../util/hooks'
import CreateAttForm from './components/CreateAttForm'
import CreateSchemaForm from './components/CreateSchemaForm'
import { connect } from 'react-redux'
import { getSchema, deleteSchema, createSchema } from '../../../store/actions/schema'
import { getAttribute, deleteAttribute, createAttribute, updateAttribute } from '../../../store/actions/attribute'
import { useHistory } from 'react-router-dom'

const MiniHeader = styled.div`

    display: flex;
    justify-content: space-between;
    width: 100%;

`

const ApiSystem = ({...props}) => {

    const [ selectedSchema, setSchema ] = useState(null)
    let [ schemaModal, openSm, closeSm ] = useModal()
    let [ attModal, openAm, closeAm ] = useModal()
    let [ eattModal, openEAm, closeEAm ] = useModal()
    const [validatedAtt, setValidatedAtt] = useState(false)
    const [validatedSm, setValidatedSm] = useState(false)
    let [ att, setAtt ] = useState({})
    let [sche, setSche] = useState({})
    let [ eatt, setEAtt ] = useState({})
    let boxId = props.match.params.boxId
    let history = useHistory()

    useEffect(() => {

        props.getSchema(boxId)

    }, [])

    const selectSchema = (row) => {

        setSchema(row)
        props.getAttribute(row._id)

    }

    const clickAtt = (att) => {
        setEAtt(att)
        openEAm()
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
        return Boolean((name || "").match(/_*[a-zA-Z0-9]+[a-zA-Z0-9_]*_*/g))
    }

    const onCreateAtt = () => {

        setValidatedAtt(true)
        let result = canUseName(att.name)
        
        if (!result){
            return
        }

        props.createAttribute({type:"string", ...att, databaseMeta: selectedSchema._id}).then(() => {

            

        }).finally((e) => {
            setAtt({})
            setValidatedAtt(false)
            closeAm()
        })

    }

    const onEditAtt = () => {

        setValidatedAtt(true)
        let result = canUseName(eatt.name)
        
        if (!result){
            return
        }

        props.updateAttribute(eatt).then(() => {

            

        }).finally(() => {
            setEAtt({})
            setValidatedAtt(false)
            closeEAm()
        })

    }

    const onDeleteAtt = () => {

        setValidatedAtt(true)

        props.deleteAttribute(eatt._id).then(() => {

            

        }).finally(() => {
            setEAtt({})
            setValidatedAtt(false)
            closeEAm()
        })
    }

    const onCreateSchema = () => {

        setValidatedSm(true)
        let result = canUseName(sche.name)
        
        if (!result){
            return
        }
        
        props.createSchema({box:boxId ,...sche}).then(() => {

        }).finally(() => {
            setSche({})
            setValidatedSm(false)
            closeSm()
        })

    }

    const deleteSchemas = (schemas) => {

        schemas.map((schema) => {
            props.deleteSchema(schema._id)
        })

    }

    return (
        <div>
            {

                selectedSchema ?
                <div>
                    <MiniHeader style={{marginBottom:"24px"}}>

                        <div style={{display:'flex'}}>
                            <h2>{selectedSchema.name}</h2>
                            {/* <Button type="link" icon="edit" /> */}
                        </div>

                        <div>
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
                        </div>
                    </MiniHeader>
                    <AttributeSection 
                        onClick={clickAtt}
                        attributes={props.attributes.map((att) => { return {...att, option:"optional"} })}
                    />
                </div>
                :
                <div>
                    <MiniHeader>
                        <Button 
                            style={{color:"#334D6E"}}
                            type="link"
                            size="large"
                            onClick={() => history.goBack()}
                        >
                            back to boxes
                        </Button>
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
                    {
                        props.schemas.length > 0 ?
                        <SchemaTable deleteSchemas={deleteSchemas} rows={props.schemas} onClick={selectSchema} />
                        :
                        <Card style={{marginTop:"24px"}}>
                            <Empty
                                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                                imageStyle={{
                                    height: 60,
                                }}
                                description={
                                <span>
                                    You don't have any Schema
                                </span>
                                }
                            >
                                <Button onClick={openSm} type="primary">Create Now</Button>
                            </Empty>
                        </Card>
                    }
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
                title="Edit attribute"
                visible={eattModal}
                onOk={onEditAtt}
                onCancel={closeEAm}
                footer={[
                    <Button key="delete" type="danger" onClick={onDeleteAtt}>
                        Delete
                    </Button>,
                    <Button key="submit" type="primary" onClick={onEditAtt}>
                        Update attribute
                    </Button>,
                ]}
            >
                <CreateAttForm onChange={(value)=>noWhiteSpaceName(value, setEAtt)} attribute={eatt} canUseName={canUseName} validated={validatedAtt} />
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

const mapStateToProps = (state) => ({
    schemas: state.schema.items,
    attributes: state.attribute.items
})

const mapDispatchToProps = {
    getSchema, deleteSchema, createSchema, getAttribute, deleteAttribute, createAttribute, updateAttribute
}


export default connect(mapStateToProps, mapDispatchToProps)(ApiSystem)
