import React from 'react'
import styled from 'styled-components'
import Attribute from './Attribute'

const Container = styled.div`

    display:flex;

`

const AttributeList = ({attributes, onClick, ...props}) => {
    return (
        <Container>
            {attributes.map((att, index) => <Attribute onClick={onClick} attribute={att} key={index} />)}
        </Container>
    )
}

export default AttributeList
