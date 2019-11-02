import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import { getBox } from '../../store/actions/box'
import BoxControl from './BoxControl'

function BoxManagement(props) {
  const history = useHistory();
  const appId = "test" // props.history.location.state.application.id

  useEffect(() => {

    const fetchProject = async () => await props.getBox(appId) // TODO - change application id here

    fetchProject()

  }, [])

  return (
    <div style={{margin:"20px 20% 0" }}>

      <BoxControl title="Channels" data={props.box.items} />

      <BoxControl title="Boxes" data={props.box.items} />

    </div>
  )
}

const mapStateToProps = (state) => ({
  box: state.box,
})

const mapDispatchToProps = {
  getBox,
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxManagement)