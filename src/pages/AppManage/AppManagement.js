import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Card, Row } from 'react-bootstrap'
import AppThumnail from './components/appThumnail'
import NewApp from './components/newApp'
import EmptyApp from './components/EmptyApp'
import { useHistory } from 'react-router-dom'
import { getApplication, deleteApplication } from '../../store/actions/application'
import { connect } from 'react-redux'

const CardTitle = styled(Card.Title)`
  padding:2.5rem 0 1rem 2.5rem
`;

function AppManage(props) {

  let history = useHistory()

  useEffect(() => {

    const fetchApp = async () => {
      await props.getApplication()
    }

    fetchApp()

  },[])

  const gotoCreateNewApp = () => {
    history.push(`/_new/app`)
  }

  const goToApp = (app) => {
    history.push(`/apps/${app._id}`)
  }

  const deleteApp = (app) => {
    props.deleteApplication(app._id)
  }

  return (
    <Card className="mt-5 mx-5 pb-5 shadow">
      <CardTitle>Applications</CardTitle>
      <Card.Body className="mx-5 px-5">
      {
          props.apps.length > 0 ? 
          <Row>
            {
              props.apps.map((value, index) => <AppThumnail app={value} onDelete={deleteApp} onClick={goToApp} index={index} key={index} />)
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

const mapStateToProps = (state) => ({
    apps: state.app.items
})

const mapDispatchToProps = {
  getApplication, deleteApplication
}


export default connect(mapStateToProps, mapDispatchToProps)(AppManage)