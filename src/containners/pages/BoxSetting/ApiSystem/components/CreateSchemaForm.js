import React from 'react'
import { Form } from 'react-bootstrap'

const CreateSchemaForm = ({onChange, schema={}, canUseName, validated, ...props}) => {

    const onChangeSchema= ({target:{value}}, key) => {

        onChange({
            ...schema,
            [key]:value
        })

    }

    console.log(schema);
    

    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Schema name</Form.Label>
                <Form.Control 
                    required
                    onChange={(e) => onChangeSchema(e, "name")}
                    value={schema.name || ""}
                    type="text"
                    placeholder="my schema"
                    isInvalid={validated && !canUseName(schema.name || "")}
                />
                <Form.Control.Feedback type="invalid">
                    You can't use this name
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control value={schema.description || ""} onChange={(e) => onChangeSchema(e, "description")} placeholder="What is this schema use for ?" as="textarea" rows="3" />
            </Form.Group>
        </Form>
    )
}

export default CreateSchemaForm
