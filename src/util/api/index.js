import user from './controllers/user'
import app from './controllers/application'
import generator from './controllers/generator'
import Authorizor from './libs/authorizationManager'

// always load token before use
Authorizor.loadToken()

export default {
    user,
    app,
    generator
}