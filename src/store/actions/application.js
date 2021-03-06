import { GET_APPLICATION, CREATE_APPLICATION, DELETE_APPLICATION, SELECT_APPLICATION } from '../types'
import API from '../../util/api'
import creatable from '../../util/api/models/application/creatable'

export const getApplication = () => async dispatch => {

  let res = await API.app.getApplication();
  if (!res) return
  
  dispatch({
    type: GET_APPLICATION,
    payload: res.data
  })

  return res.data

}

export const createApplication = (app) => async dispatch => {

  let res = await API.app.createApplication(creatable.Application(app))
  if (!res) return

  dispatch({
    type: CREATE_APPLICATION,
    payload: res.data
  })

}

export const deleteApplication = (appId) => async dispatch => {

  let res = await API.app.deleteApplication(appId)
  if (!res) return

  dispatch({
    type: DELETE_APPLICATION,
    payload: res.data
  })

}

export const selectApplication = (app) => async dispatch => {

  dispatch({
    type: SELECT_APPLICATION,
    payload: app
  })

}