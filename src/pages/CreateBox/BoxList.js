import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import { password } from '../../asset/svg'

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

const BoxList = ({boxes}) => {
    return (
        <Container>
            <Box box={{img:password, name:"Login system"}} />
            <Box box={{img:password, name:"Login system"}} />
            <Box box={{img:password, name:"Login system"}} />
            {/* {boxes.map((box) => <Box box={box} />)} */}
        </Container>
    )
}

export default BoxList
