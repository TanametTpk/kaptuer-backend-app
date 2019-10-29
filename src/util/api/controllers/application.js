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

const createProject = async ( payload , errorHandler ) => {

    return await axios.post(APP + "/project" , payload).catch(executeHandler(errorHandler))

}

const getProject = async (applicationId , errorHandler) => {

    return await axios.get(APP + `/project?application=${applicationId}`).catch(executeHandler(errorHandler))

}

const deleteProject = async (projectId , errorHandler) => {
    return await axios.delete(APP + `/project/${projectId}`).catch(executeHandler(errorHandler))
}

export default {
    createApplication,
    getApplication,
    deleteApplication,
    createProject,
    getProject,
    deleteProject
}