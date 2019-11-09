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
import { getAttribute, deleteAttribute, createAttribute } from '../../../store/actions/attribute'
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
    const [validatedAtt, setValidatedAtt] = useState(false)
    const [validatedSm, setValidatedSm] = useState(false)
    let [ att, setAtt ] = useState({})
    let [sche, setSche] = useState({})

    useEffect(() => {

        let boxId = props.match.params.boxId
        props.getSchema(boxId)

    }, [])

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
                        onClick={()=>{}}
                        attributes={[{_id:"test", name:"fuck", option:"unique"}]}
                    />
                </div>
                :
                <div>
                    <MiniHeader>
                        <div className="fake-item" />
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
                        <SchemaTable rows={props.schemas} onClick={selectSchema} />
                        :
                        <Card style={{marginTop:"24px"}}>
                            <Empty
                                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                                imageStyle={{
                                    height: 60,
                                }}
                                description={
                                <span>
                                    Customize <a href="#API">Description</a>
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
    getSchema, deleteSchema, createSchema, getAttribute, deleteAttribute, createAttribute
}


export default connect(mapStateToProps, mapDispatchToProps)(ApiSystem)
