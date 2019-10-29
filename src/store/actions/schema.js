import { GET_SCHEMA , CREATE_SCHEMA , DELETE_SCHEMA } from '../types'
import API from '../../util/api'

export const getSchema = (projectId) => async dispatch => {

    let res = await API.generator.getDb(projectId)
    if (!res) return

    dispatch({
        type: GET_SCHEMA,
        payload: res.data
    })

    return res.data

}

export const createSchema = (schema) => async dispatch => {

    let res = await API.generator.createDb(schema)
    if (!res) return

    dispatch({
        type: CREATE_SCHEMA,
        payload: res.data
    })

    return res.data

}

export const deleteSchema = (id) => async dispatch => {

    let res = await API.generator.deleteDb(id)
    if (!res) return

    dispatch({
        type: DELETE_SCHEMA,
        payload: res.data
    })

    return res.data

}