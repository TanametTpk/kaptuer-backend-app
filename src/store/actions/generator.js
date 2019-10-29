import { ADD_SCHEMA_TO_GENERATOR , CREATE_GENERATOR_PACKAGE , GENERATE_CODE } from '../types'
import API from '../../util/api'

export const createGenerator = (name , port) => dispatch => {

    dispatch({
        type: CREATE_GENERATOR_PACKAGE,
        payload:{
            name,
            port
        }
    })

}

export const addSchema = (schema) => dispatch => {

    dispatch({
        type: ADD_SCHEMA_TO_GENERATOR,
        payload:schema
    })

}

export const generate = (generator) => async dispatch => {

    let res = await API.generator.generate(generator.result())

    dispatch({
        type: GENERATE_CODE
    })

    return res.data

}