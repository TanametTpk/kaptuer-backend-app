import { GET_ATTRIBUTE , CREATE_ATTRIBUTE , DELETE_ATTRIBUTE } from '../types'
import API from '../../util/api'

export const getAttribute = (schemaId) => async dispatch => {

    let res = await API.generator.getAttribute(schemaId)
    if (!res) return

    dispatch({
        type: GET_ATTRIBUTE,
        payload: res.data
    })

    return res.data

}

export const createAttribute = (attribute) => async dispatch => {

    let res = await API.generator.createAttribute(attribute)
    if (!res) return

    dispatch({
        type: CREATE_ATTRIBUTE,
        payload: res.data
    })

    return res.data

}

export const deleteAttribute = (id) => async dispatch => {

    let res = await API.generator.deleteAttribute(id)
    if (!res) return

    dispatch({
        type: DELETE_ATTRIBUTE,
        payload: res.data
    })

    return res.data

}