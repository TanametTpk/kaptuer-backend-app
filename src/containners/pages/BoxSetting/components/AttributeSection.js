import React from 'react'
import { Card } from '../../../components/Card'
import AttributeList from './AttributeList'

const AttributeSection = ({attributes, onClick, ...props}) => {
    return (
        <Card style={{padding: "24px"}}>
            <h3>Attributes</h3>
            <AttributeList onClick={onClick} attributes={attributes} />
        </Card>
    )
}

export default AttributeSection
