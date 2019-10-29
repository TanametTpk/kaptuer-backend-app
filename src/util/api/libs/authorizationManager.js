import { setAuthorizationToken } from './headerSetter'
import Storage from './jwtStorage'

const setToken = ( token ) => {

    Storage.save(token)
    setAuthorizationToken(token)

}

const loadToken = () => {

    let token = Storage.load()
    setAuthorizationToken(token)

}

const clear = () => {
    setAuthorizationToken()
    Storage.clear()
}

export default {
    setToken,
    loadToken,
    clear
}