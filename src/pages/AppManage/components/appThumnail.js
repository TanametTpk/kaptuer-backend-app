import React from 'react'
import styled from 'styled-components'

const themeColor = [
  "#ED5565",
  "#FC6E51",
  "#FFCE54",
  "#A0DC68",
  "#48CFAD",
  "#4FC1E9",
]

const Thumnail = styled.div`
  width: 130px;
  height: 130px;
  background-color: ${props=>props.variant}
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Detail = styled.div`
  width: 130px;
  padding: 1rem 1rem;
  text-align: center;
  color: #9E9E9E;
`;

const App = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.25rem 2rem;
`;

const AppThumnail = ({index=0, name="ชิม ช็อป ใช้"}) => {
  return (
    <App>
      <Thumnail variant={themeColor[index]} className="shadow-sm">
        <img src={"https://picsum.photos/80/80"} alt={name}/>
      </Thumnail>
      <Detail>
        {name}
      </Detail>
    </App>
  )
}

export default AppThumnail