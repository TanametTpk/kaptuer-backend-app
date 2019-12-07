import React from 'react'
import styled from 'styled-components'
import DocumentFactory from './DocumentFactory'

const Container = styled.div`

    width:100%;
    height:100%;
    padding: 12px;

`

const Controller = ({platform, ...props}) => {
    return (
        <Container>
            <h2>{platform.name}</h2>
            <DocumentFactory platform={platform} />
        </Container>
    )
}

export default Controller