import React from 'react'
import styled from 'styled-components'
import { password } from '../../asset/svg'
import { MdDone } from 'react-icons/md'

const Container = styled.div`

    display:grid;
    background: #FFFFFF;
    border: 4px solid ${props => props.active ? "#48CFAD" : "#334D6E"};
    box-sizing: border-box;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    height: 243px;
    grid-template-rows: 7fr 2fr;
    justify-items: center;
    transition: all .1s ease-in-out;
    cursor: pointer;
    position: relative;

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

    .icons {
        position: absolute;
        top:0;
        right: 0;
        transform: translate(15px, -15px);
        background-color: #48CFAD;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        display: ${props => props.active ? "block" : "none"};
    }

    &:hover {

        transform: scale(1.1);

    }

`

const Box = ({box , active, onClick}) => {
    return (
        <Container active={active} onClick={() => {if (onClick) onClick(box)}}>
            <img src={box.img || password} name={box.name} alt={box.name} />
            <span>{box.name}</span>
            <div className="icons"><MdDone size="20px" fill="white" /></div>
        </Container>
    )
}

export default Box
