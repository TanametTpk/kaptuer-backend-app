import React, {useState} from 'react'
import styled from 'styled-components'
import {MdMoreVert} from 'react-icons/md'
import {useAnchorElement} from '../../../util/hooks'
import Menu from '../../../containners/MainLayout/Menu'

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
  cursor: pointer;,
  position: relative;
`;

const Container = styled.div`

  position: relative;

  .moreIcon {
    display:none;
  }

  &:hover {

    .moreIcon{
      display:block;

    }

  }

`

const AppThumnail = ({index=0, name, onClick}) => {

  const [ isMoreHover, setMoreHover ] = useState(false)
  const [ anchor, open, close ] = useAnchorElement()

  const popupHandler = (action) => {

    if (action === "Delete") console.log("Delete");

  }

  return (
    <Container>
      <App onClick={() => {onClick("set id here")}}>
        <Thumnail variant={themeColor[index % themeColor.length]} className="shadow-sm">
          <img src={"https://picsum.photos/80/80"} alt={name}/>
        </Thumnail>
        <Detail>
          {name}
        </Detail>
      </App>
      <MdMoreVert
          className="moreIcon"
          size="20px"
          fill={isMoreHover ? "gray" : "white"}
          style={{position:"absolute", top:"30px" , right:"40px", cursor:"pointer"}}
          onMouseOut={()=>setMoreHover(false)}
          onMouseOver={()=>setMoreHover(true)}
          onClick={open}
        />
        <Menu
            anchor={anchor}
            close={close}
            onClick={popupHandler}
            menus={[{name:"Delete"}]}
            vertical="top"
            horizontal="left"
        />
    </Container>
    
  )
}

export default AppThumnail