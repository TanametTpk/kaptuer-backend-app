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

const getBox = async (applicationId , errorHandler) => {

    return await axios.get(APP + `/boxes?application=${applicationId}`).catch(executeHandler(errorHandler))

}

const deleteProject = async (projectId , errorHandler) => {
    return await axios.delete(APP + `/boxes/${projectId}`).catch(executeHandler(errorHandler))
}

export default {
    createApplication,
    getApplication,
    deleteApplication,
    createBox,
    getBox,
    deleteProject
}