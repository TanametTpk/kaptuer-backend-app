import { GET_BOX , CREATE_BOX , DELETE_BOX } from '../types'
import API from '../../util/api'

export const getBox = (applicationID) => async dispatch => {

    let res = await API.app.getBox(applicationID)
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
        type: GET_BOX,
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

    let res = await API.app.createBoxes(boxes)
    if (!res) return

    dispatch({
        // type: CREATE_BOX,
        // payload: res.data
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