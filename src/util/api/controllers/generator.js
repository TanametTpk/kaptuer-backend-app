import axios from 'axios'
import API from '../../../configs/apis'
import executeHandler from '../libs/executeHandler'

const GEN = API.CONTROLLER

const generate = async (payload, errorHandler) => {

    return await axios.post(GEN + "/generator/inplace", { boxID: payload._id }).catch(executeHandler(errorHandler))

}

const getDb = async (projectID, errorHandler) => {

    return await axios.get(GEN + `/databaseMeta?box=${projectID}`).catch(executeHandler(errorHandler))

}

const createDb = async (payload, errorHandler) => {

    return await axios.post(GEN + "/databaseMeta", payload).catch(executeHandler(errorHandler))

}

const deleteDb = async (databaseID, errorHandler) => {

    return await axios.delete(GEN + `/databaseMeta/${databaseID}`).catch(executeHandler(errorHandler))

}

const getAttribute = async (dbID, errorHandler) => {

    return await axios.get(GEN + `/attribute?databaseMeta=${dbID}`).catch(executeHandler(errorHandler))

}

const createAttribute = async (payload, errorHandler) => {

    return await axios.post(GEN + "/attribute", payload).catch(executeHandler(errorHandler))

}

const deleteAttribute = async (attrubuteID, errorHandler) => {

    return await axios.delete(GEN + `/attribute/${attrubuteID}`).catch(executeHandler(errorHandler))

}

const updateAttribute = async (payload, errorHandler) => {

    return await axios.put(GEN + `/attribute/${payload._id}`, payload).catch(executeHandler(errorHandler))

}

export default {
    generate,
    getDb,
    createDb,
    deleteDb,
    getAttribute,
    createAttribute,
    deleteAttribute,
    updateAttribute
}