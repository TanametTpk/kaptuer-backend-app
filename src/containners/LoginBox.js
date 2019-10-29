import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'


import { FB_TOKEN, GOOGLE_TOKEN } from '../configs/oauth'
import api from '../util/api'
import signable from '../util/api/libs/signable'

function LoginBox() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (payload, method) => {
    let res = await api.user.login(signable[method](payload))
    console.log(res)
  }

  const logout = async () => {
    api.user.logout();
  }

  return (
    <div className="login-box">
      <div>
        <input name="email" value={email} onChange={({ target: { value } }) => setEmail(value)} placeholder="email" />
        <input name="password" value={password} onChange={({ target: { value } }) => setPassword(value)} placeholder="password" type="password" />
        <button onClick={() => login({ email, password }, "LocalSign")}>login</button>
        <button onClick={() => logout()}>logout</button>
      </div>
      <div>
        <FacebookLogin
          appId={FB_TOKEN}
          autoLoad={false}
          fields="name,email,picture"
          onClick={() => console.log("clicked")}
          callback={(response) => login(response, "FacebookSign")}
        />
        <GoogleLogin
          clientId={GOOGLE_TOKEN}
          buttonText="Login with google"
          onSuccess={(response) => login(response, "GoogleSign")}
          onFailure={(response) => console.log(response)}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  )
}

export default LoginBox
