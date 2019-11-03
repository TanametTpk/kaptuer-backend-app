import React from 'react'
import Category from './Category'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const CategoryList = ({categories}) => {
    return (
        <Container >
            {categories.map((category, index) =>
                <Category category={category} key={index} index={index} />
            )}
        </Container>
    )
}

export default CategoryList
