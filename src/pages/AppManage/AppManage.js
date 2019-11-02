import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap'

import { logOut } from '../../store/actions/user'
import { getApplication, createApplication, deleteApplication } from '../../store/actions/application'

function AppManage(props) {
  let { user, app, getApplication } = props
  const history = useHistory()
  const [appName, setAppName] = useState("")
  const [toDeleteApp, setToDeleteApp] = useState()
  const [showCreateModal, setCreateModal] = useState(false)
  const [showDeleteModal, setDeleteModal] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await getApplication()
    }
    if (!user.isLogin) {
      history.push("/")
    } else {
      fetchData();
    }

  }, [showCreateModal,showDeleteModal, user])


  const logout = async () => {
    props.logOut();
  }

  const createApplication = async (name) => {
    await props.createApplication(name)
    setAppName("")
    setCreateModal(false)
  }

  const deleteApplication = async (appId) => {
    await props.deleteApplication(appId)
    setDeleteModal(false)
  }

  return (
    <Container>
      <Row className="border-bottom w-100 my-3">
        <h1 className="Display-4 mb-4">Application</h1>
      </Row>
      <Row>
        <Col sm={4} className="d-flex justify-content-center mb-3">
          <button className="button-add-application" onClick={() => setCreateModal(true)}>
            <div>+</div>
            <div>Create New Application</div>
          </button>
        </Col>
        {/* create modal */}
        <Modal show={showCreateModal} onHide={() => setCreateModal(false)} size="sm" centered>
          <Modal.Header closeButton>
            <Modal.Title>Name your application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formBasicAppName">
              <Form.Control type="text" value={appName} onChange={(e) => setAppName(e.target.value)} placeholder="Enter Application name" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setCreateModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => createApplication(appName)}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
        {/* delete modal */}
        <DeleteModal 
          showDeleteModal={showDeleteModal}
          setDeleteModal={setDeleteModal}
          deleteApplication={()=>deleteApplication(toDeleteApp)}
        />

        {
          app.items.map((value, index) => {
            return (
              <Col className="d-flex justify-content-center mb-3" sm={4} key={index}>
                <div style={{
                  position: "absolute",
                  top: 0, right: 50,
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  height: 30,
                  width: 30,
                  textAlign: "right",
                  cursor: "pointer"
                }}
                  onClick={() => {setToDeleteApp(value._id);setDeleteModal(true)}}>x</div>
                <div className="button-add-application d-flex flex-column justify-content-end"
                  onClick={() => history.push({ pathname: '/projects', state: { application: { id: value["_id"] } } })}
                >
                  <div style={{ padding: 35 }}>{value.name}</div>
                </div>
              </Col>
            )
          })
        }
      </Row>
    </Container >
  )
}

const DeleteModal = ({showDeleteModal, setDeleteModal, deleteApplication}) => (
  <Modal show={showDeleteModal} onHide={() => setDeleteModal(false)} size="sm" centered>
          <Modal.Header closeButton>
            <Modal.Title>Cofirm to delete application</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setDeleteModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={deleteApplication}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
)

// const mapStateToProps = (state) => ({
//   user: state.user,
//   app: state.app
// })

// const mapDispatchToProps = {
//   logOut,
//   getApplication,
//   createApplication,
//   deleteApplication,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ApplicationManagement)

export default AppManage