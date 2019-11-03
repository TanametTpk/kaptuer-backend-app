import React from 'react'
import styled from 'styled-components'
import {Startup , Sales, Projects, Other} from '../../../asset/svg'


const Thumnail = styled.div`
  width: 250px;
  height: 250px;
  padding: 10px;
  background-color: ${props=>props.variant}
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Detail = styled.div`
  padding: 0 1rem;
  text-align: center;
  color: white;
  font-size: 36px;
  font-width: 500;
  
`;

const App = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.25rem 2rem;
  cursor: pointer;,
  position: relative;
`;

const Container = styled.div`

  position: relative;
  transition: all .2s ease-in-out;

  .moreIcon {
    display:none;
  }

  &:hover {

    transform: scale(1.1);

    .moreIcon{
      display:block;

    }

  }

`

const themeColor = [
    "#ED5565",
    "#FC6E51",
    "#FFCE54",
    "#A0DC68",
    "#48CFAD",
    "#4FC1E9",
]

const Category = ({category, index=0 , onClick}) => {

    let icons = Other

    const getImage = () => {
        if (category.type === "Startup") icons = Startup
        if (category.type === "Projects") icons = Projects
        if (category.type === "Sales") icons = Sales
        return icons
    }

    const sendType = () => {
      onClick({type: category.type})
    }

    return (
        <Container onClick={sendType}>
            <App >
                <Thumnail variant={themeColor[index % themeColor.length]} className="shadow-lg">
                    <img src={getImage()} style={{height:"60%",width:"60%" , flex:"1"}} alt={category.name}/>
                    <Detail>
                        {category.name}
                    </Detail>
                </Thumnail>
            </App>
        </Container>
    )
}

export default Category