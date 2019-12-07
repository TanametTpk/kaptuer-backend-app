import React, {useState} from 'react'
import styled from 'styled-components'
import AttributeCardList from '../components/AttributeCardList'
import AttributeSection from '../components/AttributeSection'

let initialState = [
    {
        name:"email",
        type:"identity",
        option:"unique"
    },
    {
        name:"password",
        type:"key",
        option:"unique"
    },
    {
        name:"username",
        option:"unique"
    },
    {
        name:"birthday",
        option:"optional"
    },
    {
        name:"address",
        option:"unset"
    },
    {
        name:"phone",
        option:"unset"
    }
]

const Container = styled.div`

    display:grid;
    grid-gap: 24px;

`

const AttributeLayout = ({props}) => {

    let [ atts , setAtts ] = useState(initialState)

    let highlightAtt = atts.filter((att) => att.type === "identity" || att.type === "key")
    let otherAtt = atts.filter((att) => att.type !== "identity" && att.type !== "key")

    const changeOption = (type) => {

        let state = ["unique", "optional", "unset"]
        let index = state.findIndex((value) => value === type)
        let nexState = state[(index + 1) % state.length]

        return nexState

    }

    const selectAtt = (att) => {
        let copy = [...atts]
        copy = copy.map((c) => {

            if (c.name === att.name) return { ...att, option: changeOption(att.option) }
            return c

        })
        setAtts(copy)
    }

    return (
        <Container>
            <AttributeCardList attributes={highlightAtt} />
            <AttributeSection onClick={selectAtt} attributes={otherAtt} />
        </Container>
    )
}

export default AttributeLayout
