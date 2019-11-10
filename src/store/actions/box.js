import { GET_BOX , CREATE_BOX, DELETE_BOX, GET_BOX_TEMPLATE } from '../types'
import API from '../../util/api'

export const getBoxes = (applicationID) => async dispatch => {

    let res = await API.app.getBoxes(applicationID)
    if(!res) return
    
    dispatch({
        type: GET_BOX,
        payload: res.data
    })

    return res.data

}

export const getBoxTemplate = () => async dispatch => {

    let res = await API.app.getBoxTemplate()
    if(!res) return

    dispatch({
        type: GET_BOX_TEMPLATE,
        payload: res.data
    })

    return res.data

}

export const createBox = (box) => async dispatch => {

    let res = await API.app.createBox(box)
    if (!res) return

    dispatch({
        type: CREATE_BOX,
        payload: res.data
    })

    return res.data

}

export const createBoxes = (boxes , applicationID) => async dispatch => {

    let res = await API.app.createBoxes({boxes, application:applicationID})
    if (!res) return

    dispatch({
        type: CREATE_BOX,
        payload: res.data
    })

    return res.data

}

export const deleteBox = (id) => async dispatch => {

    let res = await API.app.deleteBox(id)
    if (!res) return

    dispatch({
        type: DELETE_BOX,
        payload: res.data
    })

    return res.data

}