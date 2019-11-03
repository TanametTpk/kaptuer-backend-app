import React from 'react'
import styled from 'styled-components'

const NewApp = ({onClick}) => {

    const Thumnail = styled.div`
      width: 130px;
      height: 130px;
      background-color: none;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px dashed #BDBDBD;

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
      cursor: pointer;

      &:hover{
        
        #thumn{
          border: 2px dashed gray;
        }

        div{
          color:gray;
        }

        #line {
          border: 4px solid gray;
        }

      }

    `;
  
    const Line1 = styled.div`
      position: absolute;
      width: 3rem;
      height: 0px;
      border: 4px solid #BDBDBD;
      border-radius: 10px;
    `;
  
    const Line2 = styled(Line1)`
      transform: rotate(-90deg);
    `;
  
    return (
      <App onClick={onClick}>
        <Thumnail id="thumn">
          <Line1 id="line" />
          <Line2 id="line" />
        </Thumnail>
        <Detail id="detail">New App</Detail>
      </App>
    )
  
}

export default NewApp
