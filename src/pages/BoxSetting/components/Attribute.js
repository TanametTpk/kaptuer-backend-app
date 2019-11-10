import React from 'react'
import styled from 'styled-components'
import Popper from '@material-ui/core/Popper';
import {Card} from '../../../components/Card';

const Container = styled.div`

    display:flex;
    justify-contents: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 6px;
    margin: 12px;
    padding: 18px 24px;
    font-size: 20px;
    cursor: pointer;
    user-select: none;

    color: #8C8C8C;
    background: #F5F6F8;

    &.unique {
        color: white;
        background: #576D88;
        border: 3px solid #576D88;
    }

    &.optional {
        color: #576D88;
        border: 3px dashed #576D88;
    }

`

const Title = styled.span`

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: 0.4px;

    color: rgba(0, 0, 0, 0.6);

`

const SubTitle = styled.span`

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    margin-top: 5px;

    letter-spacing: 0.4px;

    color: rgba(0, 0, 0, 0.4);

`

const Attribute = ({ attribute, onClick, ...props}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const onOver = event => {
        setAnchorEl(event.currentTarget);
    }

    const onOut = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const getDescription = (option) => {

        if (option === "unique") return "can’t have same value in this system"
        if (option === "optional") return "not require this attribute"
        else return "this attribute isn’t in this system"

    }

    return (
        <>
            <Container aria-describedby={id} onClick={() => onClick(attribute)} onMouseOver={onOver} onMouseOut={onOut} className={attribute.option}>
                {attribute.name}
            </Container>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Card style={{padding: "20px", textAlign:"center", maxWidth: "200px"}} >

                    <Title>{attribute.option || "unset"}</Title>
                    <SubTitle>{getDescription(attribute.option)}</SubTitle>

                </Card>
            </Popper>
        </>
    )
}

export default Attribute
