import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { connect } from 'react-redux'

import BoxManagement from '../BoxManagement'
import ApplicationManagement from '../AppManage'
import CreateApp from '../CreateApp'
import CreateBox from '../CreateBox'
import BoxSetting from '../BoxSetting'
// import { Navbar } from '../../containners'
import { logOut } from '../../store/actions/user'
// import Loader from '../../components/Loader'
// import { initGA, logEvent, pageView } from '../../util/analytics/ga'
import MainLayout from '../../containners/MainLayout/index'
import FormLayout from '../../containners/FormLayout'

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
          <Route path="/_new/app" exact render={matchProps => <FormLayout><CreateApp {...matchProps} /></FormLayout> } />
          <Route path="/_new/box" exact render={matchProps => <FormLayout><CreateBox {...matchProps} /></FormLayout> } />
          <Route path="/apps/:appId" render={matchProps => <MainLayout><BoxManagement {...matchProps} /></MainLayout> } />
          <Route path="/boxes/:boxId" render={matchProps => <MainLayout><BoxSetting {...matchProps} /></MainLayout> } />
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