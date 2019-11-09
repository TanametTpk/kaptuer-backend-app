import React from 'react'
import styled from 'styled-components'
import AttributeCard from './AttributeCard'

const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-gap: 20px;
    height: 15vh;

`

const AttributeCardList = ({attributes, ...props}) => {
    return (
        <Container>
            {attributes.map((att, index) => <AttributeCard key={index} attribute={att} />)}
        </Container>
    )
}

export default AttributeCardList
