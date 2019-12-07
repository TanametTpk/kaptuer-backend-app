import React from 'react'
import styled from 'styled-components'
import {Card} from '../../../components/Card'

const Title = styled.span`

    font-weight: bold;
    font-size: 40px;
    letter-spacing: 0.15px;
    color: #2EA8F3;

`

const SubTitle = styled.span`

    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.15px;

    color: #576D88;

`

const AttributeCard = ({ attribute ,...props}) => {
    return (
        <Card style={{justifyContent: "center", alignItems: "center", userSelect: "none"}}>
            <Title>{attribute.name}</Title>
            <SubTitle>as {attribute.type}</SubTitle>
        </Card>
    )
}

export default AttributeCard