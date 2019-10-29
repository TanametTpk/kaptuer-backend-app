import { combineReducers } from 'redux'
import generator from './generator'
import project from './project'
import schema from './schema'
import attribute from './attribute'
import user from './user'
import app from './application'
// ADD reducer here

export default combineReducers({
    generator,
    project,
    schema,
    attribute,
    user,
    app,
    
})