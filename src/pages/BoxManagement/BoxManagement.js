import React, { useEffect } from 'react'
// import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import { getBoxes } from '../../store/actions/box'
import BoxControl from './BoxControl'

function BoxManagement(props) {
  // const history = useHistory();

  useEffect(() => {

    let appId = props.match.params.appId
    
    const fetchProject = async () => await props.getBoxes(appId) // TODO - change application id here

    fetchProject()

  },[])

  return (
    <div style={{margin:"20px 20% 0" }}>

      {/* <BoxControl title="Channels" data={props.box.items} /> */}

      <BoxControl title="Boxes" data={props.box.items} />

    </div>
  )
}

const mapStateToProps = (state) => ({
  box: state.box,
})

const mapDispatchToProps = {
  getBoxes,
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxManagement)