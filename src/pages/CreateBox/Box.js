import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    display:grid;
    background: #FFFFFF;
    border: 4px solid #334D6E;
    box-sizing: border-box;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    height: 243px;
    grid-template-rows: 7fr 2fr;
    justify-items: center;
    transition: all .2s ease-in-out;

    img {
        width:100%;
        height: 100%;
        padding:16px;
    }

    span{
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: #334D6E;
    }

    &:hover {

        transform: scale(1.1);

    }

`

const Box = ({box:{img, name}}) => {
    return (
        <Container>
            <img src={img} name={name} alt={name} />
            <span>{name}</span>
        </Container>
    )
}

export default Box
