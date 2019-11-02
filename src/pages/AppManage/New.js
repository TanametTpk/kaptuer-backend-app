import React from 'react'
import styled from 'styled-components'
import { Card, Navbar, Nav, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser, faCommentAlt, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import AppThumnail from './components/appThumnail'

const Sidebar = styled.div`
  width: 256px;
  transition: all 0.3s;
  background: #fff;
  position: fixed;
  z-index: 2;
  display: flex;
  height: 100vh;
`;

const Header = styled.div`
  margin-buttom: auto;
  font-size: 1.2rem;
  color: #109CF1;
  width: 100%;
  height: 56px;
`;

const Menus = styled.div`
  overflow: hidden;
`;

const Menu = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.active ? `#109CF1` : `#334D6E`};
`;

const Footer = styled(Menu)`
  position: fixed;
  bottom: 0;
`;

const Dashboard = styled.div`
  margin-left: calc(256px + 2rem);
  margin-right: 2rem;
  height: calc(100vh - 56px - 3rem);
  position: relative;
`;

const CardTitle = styled(Card.Title)`
  padding:2.5rem 0 1rem 2.5rem
`;

let appList = [
  "ชิม ช็อป ใช้",
  "Digit",
  "Rovou",
  "Finder",
  "Techip",
  "Goalise"
]

function AppManage(props) {
  return (
    <>
      <Sidebar className="shadow flex-column">
        <Menus className="flex-column px-4 mt-2 h-100">
          <Header className="py-2">
            Kaptuer
          </Header>
          <Menu className="d-flex align-items-center mb-3" active={true}>
            <DashboardIco /><span className="px-3">Dashboard</span>
          </Menu>
          <Menu className="mb-3">
            <FontAwesomeIcon icon={faUser} /><span className="px-3">Profile</span>
          </Menu>
          <Menu className="mb-3">
            <FontAwesomeIcon icon={faCommentAlt} /><span className="px-3">Report & Feedbacks</span>
          </Menu>
          <Footer className="mb-3">
            <FontAwesomeIcon icon={faEnvelope} /><span className="px-3">Contact us</span>
          </Footer>
        </Menus>
      </Sidebar>
      <Navbar bg="white" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><FontAwesomeIcon icon={faPlusCircle} size="lg" /></Nav.Link>
            <Nav.Link><FontAwesomeIcon icon={faBell} /></Nav.Link>
            <Nav.Link>User</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Dashboard className="px-3">
        <Card className="mt-5 mx-3 h-100 shadow">
          <CardTitle>Applications</CardTitle>
          <Card.Body className="mx-5 px-5">
            <Row>
              {
                appList.map((value, index) => <AppThumnail name={value} index={index} key={index} />)
              }
              <NewApp />
            </Row>
          </Card.Body>
        </Card>
      </Dashboard >
    </>
  )
}

export default AppManage

const DashboardIco = ({ className }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={className} d="M1.5 8.13333C1.33431 8.13333 1.2 7.99902 1.2 7.83333V1.5C1.2 1.33431 1.33431 1.2 1.5 1.2H6.16667C6.33235 1.2 6.46667 1.33431 6.46667 1.5V7.83333C6.46667 7.99902 6.33235 8.13333 6.16667 8.13333H1.5ZM1.5 14.8C1.33431 14.8 1.2 14.6657 1.2 14.5V11.5C1.2 11.3343 1.33431 11.2 1.5 11.2H6.16667C6.33235 11.2 6.46667 11.3343 6.46667 11.5V14.5C6.46667 14.6657 6.33235 14.8 6.16667 14.8H1.5ZM9.83333 14.8C9.66765 14.8 9.53333 14.6657 9.53333 14.5V8.16667C9.53333 8.00098 9.66765 7.86667 9.83333 7.86667H14.5C14.6657 7.86667 14.8 8.00098 14.8 8.16667V14.5C14.8 14.6657 14.6657 14.8 14.5 14.8H9.83333ZM9.53333 1.5C9.53333 1.33431 9.66765 1.2 9.83333 1.2H14.5C14.6657 1.2 14.8 1.33431 14.8 1.5V4.5C14.8 4.66569 14.6657 4.8 14.5 4.8H9.83333C9.66765 4.8 9.53333 4.66569 9.53333 4.5V1.5Z" stroke="#109CF1" strokeWidth="1.4" />
    </svg>
  )
}

const NewApp = () => {
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
    <App>
      <Thumnail>
        <Line1 />
        <Line2 />
      </Thumnail>
      <Detail>New App</Detail>
    </App>
  )

}