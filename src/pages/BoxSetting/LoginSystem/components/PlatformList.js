import React from 'react'
import styled from 'styled-components'
import UsagePlatform from './UsagePlatform'

const Container = styled.div`

    display: flex;

`

const PlatformList = ({platforms, selected, onClick}) => {
    return (
        <Container>
            { platforms.map((platform) => <UsagePlatform active={selected.name === platform.name} onClick={onClick} platform={platform} margin="34px" />) }
        </Container>
    )
}

export default PlatformList