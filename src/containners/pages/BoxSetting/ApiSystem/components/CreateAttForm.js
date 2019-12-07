import React from 'react'
import { Form } from 'react-bootstrap'

const CreateAttForm = ({onChange, attribute={}, canUseName, validated, ...props}) => {

    const onChangeAtt= ({target:{value}}, key) => {

        onChange({
            ...attribute,
            [key]:value
        })

    }

    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Attribute name</Form.Label>
                <Form.Control 
                    required
                    onChange={(e) => onChangeAtt(e, "name")}
                    value={attribute.name || ""}
                    type="text"
                    placeholder="my attribute"
                    isInvalid={validated && !canUseName(attribute.name || "")}
                />
                <Form.Control.Feedback type="invalid">
                    You can't use this name
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridState">
                <Form.Label>DataType</Form.Label>
                <Form.Control onChange={(e) => onChangeAtt(e, "type")} as="select">
                    <option>string</option>
                    <option>number</option>
                    <option>date</option>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

export default CreateAttForm
