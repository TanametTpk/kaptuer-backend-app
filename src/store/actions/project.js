import { GET_PROJECT , CREATE_PROJECT , DELETE_PROJECT } from '../types'
import API from '../../util/api'

export const getBox = (applicationID) => async dispatch => {

    let res = await API.app.getBox(applicationID)
    if(!res) return

    dispatch({
        type: GET_PROJECT,
        payload: res.data
    })

    return res.data

}

export const createBox = (project) => async dispatch => {

    let res = await API.app.createBox(project)
    if (!res) return

    dispatch({
        type: CREATE_PROJECT,
        payload: res.data
    })

    return res.data

}

export const deleteBox = (id) => async dispatch => {

    let res = await API.app.deleteBox(id)
    if (!res) return

    dispatch({
        type: DELETE_PROJECT,
        payload: res.data
    })

    return res.data

}