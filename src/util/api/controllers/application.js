import axios from 'axios'
import API from '../../../configs/apis'
import executeHandler from '../libs/executeHandler'

const APP = API.APPLICATION

const createApplication = async ( payload , errorHandler ) => {

    return await axios.post(APP + "/application" , payload).catch(executeHandler(errorHandler))

}

const getApplication = async (errorHandler) => {

    return await axios.get(APP + "/application").catch(executeHandler(errorHandler))

}

const deleteApplication = async (applicationId , errorHandler) => {
    return await axios.delete(APP + `/application/${applicationId}`).catch(executeHandler(errorHandler))
}

const createBox = async ( payload , errorHandler ) => {

    return await axios.post(APP + "/boxes" , payload).catch(executeHandler(errorHandler))

}

const createBoxes = async ( payload , errorHandler ) => {

    return await axios.post(APP + "/boxes/clone" , payload).catch(executeHandler(errorHandler))

}

const getBox = async (applicationId , errorHandler) => {

    return await axios.get(APP + `/boxes?application=${applicationId}`).catch(executeHandler(errorHandler))

}

const getBoxTemplate = async (errorHandler) => {

    return await axios.get(APP + `/boxes?type=template`).catch(executeHandler(errorHandler))

}

const deleteBox = async (boxId , errorHandler) => {
    return await axios.delete(APP + `/boxes/${boxId}`).catch(executeHandler(errorHandler))
}

export default {
    createApplication,
    getApplication,
    deleteApplication,
    createBox,
    getBox,
    deleteBox,
    createBoxes,
    getBoxTemplate
}