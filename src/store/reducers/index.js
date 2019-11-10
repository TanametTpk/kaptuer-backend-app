import { combineReducers } from 'redux'
import generator from './generator'
import box from './box'
import schema from './schema'
import attribute from './attribute'
import user from './user'
import app from './application'
// ADD reducer here

export default combineReducers({
    generator,
    box,
    schema,
    attribute,
    user,
    app,
    
})