import { ADD_SCHEMA_TO_GENERATOR , CREATE_GENERATOR_PACKAGE , GENERATE_CODE } from '../types'
import Model from '../../util/api/models/generator'
const { Application } = Model

const initState = {
    item: {},
}

export default function (state = initState, action) {

    switch (action.type) {
        case CREATE_GENERATOR_PACKAGE:

            let { name, port } = action.payload

            return {
                ...state,
                item: new Application(name, port),
            }

        case ADD_SCHEMA_TO_GENERATOR:

            let schema = action.payload
            let application = state.item

            application.addSchema(schema)

            return {
                ...state,
                item: application,
            }

        case GENERATE_CODE:

            return {
                ...state,
                item: {},
            }

        default:
            return state
    }

}