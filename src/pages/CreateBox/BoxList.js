import React from 'react'
import styled from 'styled-components'
import Box from './Box'

const Container = styled.div`

    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fit, 350px);
    justify-content: center;
    padding: 12px;

    @media only screen and (max-width: 600px) {

        grid-template-columns: repeat(auto-fit, 250px);

    }

`

const BoxList = ({boxes, onSelect, selectedMap}) => {

    return (
        <Container>
            {boxes.map((box) => <Box active={selectedMap[box._id]} onClick={onSelect} box={box} />)}
        </Container>
    )
}

export default BoxList
