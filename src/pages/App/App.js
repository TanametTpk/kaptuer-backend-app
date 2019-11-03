import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { connect } from 'react-redux'

import BoxManagement from '../BoxManagement'
import ApplicationManagement from '../AppManage'
import { Navbar } from '../../containners'
import { logOut } from '../../store/actions/user'
import Loader from '../../components/Loader'
import { initGA, logEvent, pageView } from '../../util/analytics/ga'
import MainLayout from '../../containners/MainLayout/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../../asset/css/main.css'
import '../../asset/css/customs.css'

function App(props) {

  useEffect(()=>{
    // initGA()
    // pageView()
  })

  // if (!props.user.isLogin){
  //   logEvent("appPage", "not login")
  //   window.location.href = "https://kaptuer.com";
  //   return(<Loader />)
  // }

  // const logout = () => {
  //   props.logOut()
  //   logEvent("nav", "logout")
  // }

  return (
      <Router>
        {/* {!props.user.isLogin || <Navbar isLogin={props.user.isLogin} logout={logout} name={props.user.name}/> } */}
        <Switch>
          <Route path="/" exact render={matchProps => <MainLayout><ApplicationManagement {...matchProps} /></MainLayout> } />
          <Route path="/apps/:appId" render={matchProps => <MainLayout><BoxManagement {...matchProps} /></MainLayout> } />
          <Route component={()=><div>error</div>} />
        </Switch>
      </Router>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {
  logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);