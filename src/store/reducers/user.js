import { LOGIN, LOGOUT } from '../types'
import Authization from '../../util/api/libs/jwtStorage'

const initialState = {
  id: "",
  name: "",
  email: "",
  provider_type: "",
  isLogin: Authization.isHave(),
}

export default function (state = initialState, action) {

  switch (action.type) {
    case LOGIN:
      let { _id, email, name, provider_type } = action.payload

      return {
        ...state,
        id: _id,
        name: name,
        email: email,
        provider_type: provider_type,
        isLogin: true,
      }
    case LOGOUT:
      return {
        ...state,
        name: "",
        username: "",
        provider: "",
        isLogin: false,
      }
    default:
      return state
  }
}