import axios from 'axios'
import API from '../../../configs/apis'
import Authorizor from '../libs/authorizationManager'
import executeHandler from '../libs/executeHandler'

const USER = API.USER

const createUser = async ( payload, errorHandler) => {

    return await axios.post(USER + "/user" , payload).catch(executeHandler(errorHandler))

}

const login = async (payload, errorHandler) => {

    let res = await axios.post(USER + "/user/validate" , payload).catch(executeHandler(errorHandler))

    let token = res.data.token

    // save token
    if (token) {
        Authorizor.setToken(token)
    }

    return res

}

const logout = () => {

    // remove token
    Authorizor.clear()

}

export default {
    createUser,
    login,
    logout,
}