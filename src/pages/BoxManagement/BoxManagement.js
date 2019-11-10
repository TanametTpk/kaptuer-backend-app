import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBoxes } from '../../store/actions/box'
import BoxControl from './BoxControl'
import { Modal, Button, Empty, Card } from 'antd'

function BoxManagement(props) {
  const history = useHistory();

  useEffect(() => {

    let appId = props.match.params.appId

    if (Object.entries(props.selecedApp).length < 1) history.push("/")
    
    const fetchProject = async () => await props.getBoxes(appId) // TODO - change application id here

    fetchProject()

  },[])

  return (
    <div style={{margin:"20px 20% 0" }}>

      {/* <BoxControl title="Channels" data={props.box.items} /> */}

      {
        props.box.items.length < 1 ?
        <Empty
            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
            imageStyle={{
                height: 60,
            }}
            description={
            <span>
                You don't have any box
            </span>
            }
        >
            <Button onClick={() => history.push("/_new/box")} type="primary">Create Now</Button>
        </Empty>
        :
        <BoxControl title="Boxes" data={props.box.items} />

      }

    </div>
  )
}

const mapStateToProps = (state) => ({
  box: state.box,
  selecedApp: state.app.selected
})

const mapDispatchToProps = {
  getBoxes,
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxManagement)