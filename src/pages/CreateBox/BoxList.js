import React, {useState} from 'react'
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

const BoxList = ({boxes}) => {

    let [ selectedMap, setMap ] = useState({})

    const toggleSelect = (box) => {
        
        let sm = {...selectedMap}
        if (sm[box._id]){
            delete sm[box._id]
        }else{
            sm[box._id] = box
        }

        setMap(sm)

    }

    return (
        <Container>
            {boxes.map((box) => <Box active={selectedMap[box._id]} onClick={toggleSelect} box={box} />)}
        </Container>
    )
}

export default BoxList
