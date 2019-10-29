import { GET_SCHEMA , CREATE_SCHEMA , DELETE_SCHEMA } from '../types'

const initState = {
    items: [],
}

export default function (state = initState, action) {

    switch (action.type) {
        case CREATE_SCHEMA:

            return {
                ...state,
                items: [ action.payload , ...state.items]
            }

        case GET_SCHEMA:

            return {
                ...state,
                items: action.payload,
            }

        case DELETE_SCHEMA:

            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload._id),
            }

        default:
            return state
    }

}