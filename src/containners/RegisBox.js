import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

import { Modal } from '../components'

import { FB_TOKEN, GOOGLE_TOKEN } from '../configs/oauth'
import api from '../util/api'
import signable from '../util/api/libs/signable'
function RegisBox() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const registration = async (payload, method) => {
    let res = await api.user.createUser(signable[method](payload))
    console.log(res)
  }

  return (
     <Modal>
          <div>
            <input name="name" value={name} onChange={({ target: { value } }) => setName(value)} placeholder="name" />
            <input name="email" value={email} onChange={({ target: { value } }) => setEmail(value)} placeholder="email" />
            <input name="password" value={password} onChange={({ target: { value } }) => setPassword(value)} placeholder="password" type="password" />
            <button onClick={() => registration({name, email, password}, "LocalSign")}>regis</button>
          </div>
          <div>
            <FacebookLogin
              appId={FB_TOKEN}
              autoLoad={false}
              fields="name,email,picture"
              onClick={() => console.log("clicked")}
              callback={(response) => registration(response, "FacebookSign")}
            />
            <GoogleLogin
              clientId={GOOGLE_TOKEN}
              buttonText="Login with google"
              onSuccess={(response) => registration(response, "GoogleSign")}
              onFailure={(response) => console.log(response)}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </Modal>
  )
}

export default RegisBox
