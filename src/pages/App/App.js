import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { connect, Provider } from 'react-redux'

import ProjectManagement from '../ProjectManagement'
import ApplicationManagement from '../ApplicationManagement'
import { Navbar } from '../../containners'
import store from '../../store'
import { logOut } from '../../store/actions/user'
import Loader from '../../components/Loader'
import { initGA, logEvent, pageView } from '../../util/analytics/ga'
import MainLayout from '../../containners/MainLayout'

import 'bootstrap/dist/css/bootstrap.min.css';
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
    // <Provider store={store}>
    //   <Router>
    //     {!props.user.isLogin || <Navbar isLogin={props.user.isLogin} logout={logout} name={props.user.name}/> }
    //     <Switch>
    //       <Route path="/" exact component={ApplicationManagement} />
    //       <Route path="/projects" component={ProjectManagement} />
    //       <Route component={()=><div>error</div>} />
    //     </Switch>
    //   </Router>
    // </Provider>
    <MainLayout>
      test
    </MainLayout>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {
  logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);