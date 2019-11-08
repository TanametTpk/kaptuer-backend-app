import React from 'react'
import styled from 'styled-components'
import { Card, Row } from 'react-bootstrap'
import AppThumnail from './components/appThumnail'
import NewApp from './components/newApp'
import EmptyApp from './components/EmptyApp'
import { useHistory } from 'react-router-dom'

const CardTitle = styled(Card.Title)`
  padding:2.5rem 0 1rem 2.5rem
`;

let appList = [
  // "ชิม ช็อป ใช้",
  // "Digit",
  // "Rovou",
  // "Finder",
  // "Techip",
  // "Goalise"
]

function AppManage(props) {

  let history = useHistory()

  const gotoCreateNewApp = () => {
    history.push(`/_new/app`)
  }

  const goToApp = (id) => {
    history.push(`/apps/test`)
  }

  return (
    <Card className="mt-5 mx-5 pb-5 shadow">
      <CardTitle>Applications</CardTitle>
      <Card.Body className="mx-5 px-5">
      {
        appList.length > 0 ? 
          <Row>
            {
              appList.map((value, index) => <AppThumnail onClick={goToApp} name={value} index={index} key={index} />)
            }
            <NewApp onClick={gotoCreateNewApp} />
          </Row>
        :
          <EmptyApp onClick={gotoCreateNewApp} />
      }
      </Card.Body>
    </Card>
  )
}

export default AppManage